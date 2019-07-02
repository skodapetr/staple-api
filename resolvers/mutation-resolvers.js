const schemaString = require('../schema/schema');
const { buildSchemaFromTypeDefinitions } = require('graphql-tools');
const schemaMapping = require('../schema/schema-mapping');
const factory = require('@graphy/core.data.factory');

createMutationResolvers = (database, tree) => {
    const schema = buildSchemaFromTypeDefinitions(schemaString);

    let objectsFromSchemaObjectTree = [];
    for (var property in tree) { objectsFromSchemaObjectTree.push(tree[property]); };
    // console.log(objectsFromSchemaMapping)
    // console.log(schemaMapping["@context"])
    // console.log(schemaMapping["@graph"])

    // ADD ROOT MUTATION
    let newResolverBody = {};

    // find mutation 
    const mutation = schema.getTypeMap()['Mutation'].astNode;

    for (let field in mutation.fields) {
        // console.log(mutation.fields[field].name.value);

        newResolverBody[mutation.fields[field].name.value] = (args, req) => {
            // Object ID
            const objectID = req.input['_id'];
            if (objectID === undefined) {
                return false;
            }

            let asada = database.getTriplesBySubject("http://subject");
            console.log("\n\n")
            console.log(asada)

            let fieldName = mutation.fields[field].name.value;
            let fieldFromSchemaTree = objectsFromSchemaObjectTree.filter(x => x.name === fieldName);
            // console.log(fieldFromSchema)
            fieldFromSchemaTree = fieldFromSchemaTree[0];

            if (req.type === "CREATE") {
                if (database.getTriplesBySubject(objectID).length > 0) {
                    return false;
                }

                for (let propertyName in fieldFromSchemaTree.data) {
                    if (propertyName === '_id') {
                        continue;
                    }
                    else if (propertyName === '_type') {
                        database.create(factory.namedNode(objectID), factory.namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"), factory.namedNode(fieldFromSchemaTree.uri));
                    }
                    else {
                        let uri = schemaMapping["@context"][propertyName];
                        if (uri === undefined) {
                            uri = "http://schema.org/" + propertyName;
                        }

                        let objectFromInput = req.input[propertyName];
                        if (objectFromInput !== undefined) {
                            objectFromInput = objectFromInput[0];

                            let returnType = "";
                            if (fieldFromSchemaTree.data[propertyName].kind === "ListType") {
                                returnType = fieldFromSchemaTree.data[propertyName].data.name;
                            }
                            else {
                                returnType = fieldFromSchemaTree.data[propertyName].name;
                            }
                            returnType = objectsFromSchemaObjectTree.filter(x => x.name === returnType)[0];


                            if (returnType.type === "http://www.w3.org/2000/01/rdf-schema#Class") {
                                database.create(factory.namedNode(objectID), factory.namedNode(uri), factory.namedNode(objectFromInput['_id']));
                            }
                            else if (returnType.type === "UnionType") {
                                uriFromInput = schemaMapping["@context"][objectFromInput['_type']];
                                if (uri.includes(uriFromInput)) {
                                    database.create(factory.namedNode(objectID), factory.namedNode(uriFromInput), factory.namedNode(objectFromInput['_id']));
                                }
                            }
                            else if (returnType.type === "http://schema.org/DataType") {
                                let objForQuery = factory.literal(objectFromInput['_value']);
                                objForQuery.datatype = factory.namedNode("http://schema.org/" + objectFromInput['_type']);
                                database.create(factory.namedNode(objectID), factory.namedNode(uri), objForQuery);
                            }
                            else {
                                console.log("UNHANDLED TYPE")
                            }
                        }
                    }
                }
                asada = database.getTriplesBySubject("http://subject");
                console.log("\n\n")
                console.log(asada)
                return true;
            }
            else {
                // Need to be created
                if (database.getTriplesBySubject(objectID).length === 0) {
                    return false;
                }

                if (req.type === "UPDATE") {
                    // Remove old fields
                    for (let propertyName in fieldFromSchemaTree.data) {
                        if (propertyName !== '_id' && propertyName !== '_type') {
                            let uri = schemaMapping["@context"][propertyName];
                            if (uri === undefined) {
                                uri = "http://schema.org/" + propertyName;
                            }

                            database.delete(factory.namedNode(objectID), factory.namedNode(uri), undefined);
                        }
                    }
                }
                else if (req.type === "INSERT") {
                    // Validation 
                    for (let propertyName in fieldFromSchemaTree.data) {
                        if (propertyName !== '_id' && propertyName !== '_type') {
                            if (req.input[propertyName] !== undefined) {
                                if (fieldFromSchemaTree.data[propertyName].kind !== undefined && fieldFromSchemaTree.data[propertyName].kind === "ListType") {
                                    continue;
                                }
                                else {
                                    let uri = schemaMapping["@context"][propertyName];
                                    if (uri === undefined) {
                                        uri = "http://schema.org/" + propertyName;
                                    }
                                    let search = database.getObjs(objectID, uri);
                                    if (search.length > 0) {
                                        return false;
                                    }
                                }
                            }
                        }
                    }
                }

                for (let propertyName in fieldFromSchemaTree.data) {
                    if (propertyName !== '_id' && propertyName !== '_type') {
                        let uri = schemaMapping["@context"][propertyName];
                        if (uri === undefined) {
                            uri = "http://schema.org/" + propertyName;
                        }

                        let objectFromInput = req.input[propertyName];
                        if (objectFromInput !== undefined) {
                            objectFromInput = objectFromInput[0]

                            let returnType = "";
                            if (fieldFromSchemaTree.data[propertyName].kind === "ListType") {
                                returnType = fieldFromSchemaTree.data[propertyName].data.name;
                            }
                            else {
                                returnType = fieldFromSchemaTree.data[propertyName].name;
                            }
                            returnType = objectsFromSchemaObjectTree.filter(x => x.name === returnType)[0];

                            if (returnType.type === "http://www.w3.org/2000/01/rdf-schema#Class") {

                                if (req.type === "REMOVE") {
                                    database.delete(factory.namedNode(objectID), factory.namedNode(uri), factory.namedNode(objectFromInput['_id']));
                                }
                                else {
                                    database.create(factory.namedNode(objectID), factory.namedNode(uri), factory.namedNode(objectFromInput['_id']));
                                }
                            }
                            else if (returnType.type === "UnionType") {
                                uriFromInput = schemaMapping["@context"][objectFromInput['_type']];

                                if (uri.includes(uriFromInput)) {
                                    if (req.type === "REMOVE") {
                                        database.delete(factory.namedNode(objectID), factory.namedNode(uriFromInput), factory.namedNode(objectFromInput['_id']));
                                    }
                                    else {
                                        database.create(factory.namedNode(objectID), factory.namedNode(uriFromInput), factory.namedNode(objectFromInput['_id']));
                                    }

                                }
                            }
                            else if (returnType.type === "http://schema.org/DataType") {
                                let objForQuery = factory.literal(objectFromInput['_value']);
                                objForQuery.datatype = factory.namedNode("http://schema.org/" + objectFromInput['_type']);

                                if (req.type === "REMOVE") {
                                    database.delete(factory.namedNode(objectID), factory.namedNode(uri), objForQuery);
                                }
                                else {
                                    database.create(factory.namedNode(objectID), factory.namedNode(uri), objForQuery);
                                }
                            }
                            else {
                                console.log("UNHANDLED TYPE")
                            }
                        }
                    }
                }
                asada = database.getTriplesBySubject("http://subject");
                console.log("\n\n")
                console.log(asada)
                return true;
            }
            return false;
        };
    }

    newResolverBody['DELETE'] = (args, req) => {
        const objectID = req.id;
        if (objectID === undefined) {
            return false;
        }
        return database.deleteID(factory.namedNode(objectID));
    }

    return newResolverBody;
}


module.exports = createMutationResolvers