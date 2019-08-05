const schemattl = `
@prefix schema: <http://schema.org/> .
@prefix bibo: <http://purl.org/ontology/bibo/> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcat: <http://www.w3.org/ns/dcat#> .
@prefix dct: <http://purl.org/dc/terms/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix dctype: <http://purl.org/dc/dcmitype/> .
@prefix eli: <http://data.europa.eu/eli/ontology#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfa: <http://www.w3.org/ns/rdfa#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix schema: <http://schema.org/> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix snomed: <http://purl.bioontology.org/ontology/SNOMEDCT/> .
@prefix void: <http://rdfs.org/ns/void#> .
@prefix xml: <http://www.w3.org/XML/1998/namespace> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix xsd1: <hhttp://www.w3.org/2001/XMLSchema#> .

schema:AMRadioChannel a rdfs:Class ;
    rdfs:label "AMRadioChannel" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1004> ;
    schema:category "issue-1004" ;
    rdfs:comment "A radio channel that uses AM." ;
    rdfs:subClassOf schema:RadioChannel .

schema:APIReference a rdfs:Class ;
    rdfs:label "APIReference" ;
    rdfs:comment "Reference documentation for application programming interfaces (APIs)." ;
    rdfs:subClassOf schema:TechArticle .

schema:AboutPage a rdfs:Class ;
    rdfs:label "AboutPage" ;
    rdfs:comment "Web page type: About page." ;
    rdfs:subClassOf schema:WebPage .

schema:AcceptAction a rdfs:Class ;
    rdfs:label "AcceptAction" ;
    rdfs:comment """The act of committing to/adopting an object.<br/><br/>

Related actions:<br/><br/>

<ul>
<li><a class="localLink" href="http://schema.org/RejectAction">RejectAction</a>: The antonym of AcceptAction.</li>
</ul>
""" ;
    rdfs:subClassOf schema:AllocateAction .

schema:Accommodation a rdfs:Class ;
    rdfs:label "Accommodation" ;
    dct:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> ;
    rdfs:comment """An accommodation is a place that can accommodate human beings, e.g. a hotel room, a camping pitch, or a meeting room. Many accommodations are for overnight stays, but this is not a mandatory requirement.
For more specific types of accommodations not defined in schema.org, one can use additionalType with external vocabularies.
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.""" ;
    rdfs:subClassOf schema:Place .

schema:AccountingService a rdfs:Class ;
    rdfs:label "AccountingService" ;
    rdfs:comment """Accountancy business.<br/><br/>

As a <a class="localLink" href="http://schema.org/LocalBusiness">LocalBusiness</a> it can be described as a <a class="localLink" href="http://schema.org/provider">provider</a> of one or more <a class="localLink" href="http://schema.org/Service">Service</a>(s).""" ;
    rdfs:subClassOf schema:FinancialService .

schema:AchieveAction a rdfs:Class ;
    rdfs:label "AchieveAction" ;
    rdfs:comment "The act of accomplishing something via previous efforts. It is an instantaneous action rather than an ongoing process." ;
    rdfs:subClassOf schema:Action .

schema:Action a rdfs:Class ;
    rdfs:label "Action" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_ActionCollabClass> ;
    rdfs:comment """An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.<br/><br/>

See also <a href="http://blog.schema.org/2014/04/announcing-schemaorg-actions.html">blog post</a> and <a href="http://schema.org/docs/actions.html">Actions overview document</a>.""" ;
    rdfs:subClassOf schema:Thing .

schema:ActionAccessSpecification a rdfs:Class ;
    rdfs:label "ActionAccessSpecification" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1741> ;
    schema:category "issue-1741" ;
    rdfs:comment "A set of requirements that a must be fulfilled in order to perform an Action." ;
    rdfs:subClassOf schema:Intangible .

schema:ActionStatusType a rdfs:Class ;
    rdfs:label "ActionStatusType" ;
    rdfs:comment "The status of an Action." ;
    rdfs:subClassOf schema:Enumeration .

schema:ActivateAction a rdfs:Class ;
    rdfs:label "ActivateAction" ;
    rdfs:comment "The act of starting or activating a device or application (e.g. starting a timer or turning on a flashlight)." ;
    rdfs:subClassOf schema:ControlAction .

schema:AddAction a rdfs:Class ;
    rdfs:label "AddAction" ;
    rdfs:comment "The act of editing by adding an object to a collection." ;
    rdfs:subClassOf schema:UpdateAction .

schema:AdministrativeArea a rdfs:Class ;
    rdfs:label "AdministrativeArea" ;
    rdfs:comment "A geographical region, typically under the jurisdiction of a particular government." ;
    rdfs:subClassOf schema:Place .

schema:AdultEntertainment a rdfs:Class ;
    rdfs:label "AdultEntertainment" ;
    rdfs:comment "An adult entertainment establishment." ;
    rdfs:subClassOf schema:EntertainmentBusiness .

schema:AggregateOffer a rdfs:Class ;
    rdfs:label "AggregateOffer" ;
    rdfs:comment "When a single product is associated with multiple offers (for example, the same pair of shoes is offered by different merchants), then AggregateOffer can be used." ;
    rdfs:subClassOf schema:Offer .

schema:AggregateRating a rdfs:Class ;
    rdfs:label "AggregateRating" ;
    rdfs:comment "The average rating based on multiple ratings or reviews." ;
    rdfs:subClassOf schema:Rating .

schema:AgreeAction a rdfs:Class ;
    rdfs:label "AgreeAction" ;
    rdfs:comment "The act of expressing a consistency of opinion with the object. An agent agrees to/about an object (a proposition, topic or theme) with participants." ;
    rdfs:subClassOf schema:ReactAction .

schema:Airline a rdfs:Class ;
    rdfs:label "Airline" ;
    rdfs:comment "An organization that provides flights for passengers." ;
    rdfs:subClassOf schema:Organization .

schema:Airport a rdfs:Class ;
    rdfs:label "Airport" ;
    rdfs:comment "An airport." ;
    rdfs:subClassOf schema:CivicStructure .

schema:AlignmentObject a rdfs:Class ;
    rdfs:label "AlignmentObject" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_LRMIClass> ;
    rdfs:comment "An intangible item that describes an alignment between a learning resource and a node in an educational framework." ;
    rdfs:subClassOf schema:Intangible .

schema:AllocateAction a rdfs:Class ;
    rdfs:label "AllocateAction" ;
    rdfs:comment "The act of organizing tasks/objects/events by associating resources to it." ;
    rdfs:subClassOf schema:OrganizeAction .

schema:AmusementPark a rdfs:Class ;
    rdfs:label "AmusementPark" ;
    rdfs:comment "An amusement park." ;
    rdfs:subClassOf schema:EntertainmentBusiness .

schema:AnimalShelter a rdfs:Class ;
    rdfs:label "AnimalShelter" ;
    rdfs:comment "Animal shelter." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:Answer a rdfs:Class ;
    rdfs:label "Answer" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_QAStackExchange> ;
    rdfs:comment "An answer offered to a question; perhaps correct, perhaps opinionated or wrong." ;
    rdfs:subClassOf schema:Comment .

schema:Apartment a rdfs:Class ;
    rdfs:label "Apartment" ;
    dct:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> ;
    rdfs:comment "An apartment (in American English) or flat (in British English) is a self-contained housing unit (a type of residential real estate) that occupies only part of a building (Source: Wikipedia, the free encyclopedia, see <a href=\"http://en.wikipedia.org/wiki/Apartment\">http://en.wikipedia.org/wiki/Apartment</a>)." ;
    rdfs:subClassOf schema:Accommodation .

schema:ApartmentComplex a rdfs:Class ;
    rdfs:label "ApartmentComplex" ;
    rdfs:comment "Residence type: Apartment complex." ;
    rdfs:subClassOf schema:Residence .

schema:AppendAction a rdfs:Class ;
    rdfs:label "AppendAction" ;
    rdfs:comment "The act of inserting at the end if an ordered collection." ;
    rdfs:subClassOf schema:InsertAction .

schema:ApplyAction a rdfs:Class ;
    rdfs:label "ApplyAction" ;
    rdfs:comment """The act of registering to an organization/service without the guarantee to receive it.<br/><br/>

Related actions:<br/><br/>

<ul>
<li><a class="localLink" href="http://schema.org/RegisterAction">RegisterAction</a>: Unlike RegisterAction, ApplyAction has no guarantees that the application will be accepted.</li>
</ul>
""" ;
    rdfs:subClassOf schema:OrganizeAction .

schema:Aquarium a rdfs:Class ;
    rdfs:label "Aquarium" ;
    rdfs:comment "Aquarium." ;
    rdfs:subClassOf schema:CivicStructure .

schema:ArriveAction a rdfs:Class ;
    rdfs:label "ArriveAction" ;
    rdfs:comment "The act of arriving at a place. An agent arrives at a destination from a fromLocation, optionally with participants." ;
    rdfs:subClassOf schema:MoveAction .

schema:ArtGallery a rdfs:Class ;
    rdfs:label "ArtGallery" ;
    rdfs:comment "An art gallery." ;
    rdfs:subClassOf schema:EntertainmentBusiness .

schema:Article a rdfs:Class ;
    rdfs:label "Article" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews> ;
    rdfs:comment """An article, such as a news article or piece of investigative report. Newspapers and magazines have articles of many different types and this is intended to cover them all.<br/><br/>

See also <a href="http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html">blog post</a>.""" ;
    rdfs:subClassOf schema:CreativeWork .

schema:AskAction a rdfs:Class ;
    rdfs:label "AskAction" ;
    rdfs:comment """The act of posing a question / favor to someone.<br/><br/>

Related actions:<br/><br/>

<ul>
<li><a class="localLink" href="http://schema.org/ReplyAction">ReplyAction</a>: Appears generally as a response to AskAction.</li>
</ul>
""" ;
    rdfs:subClassOf schema:CommunicateAction .

schema:AssessAction a rdfs:Class ;
    rdfs:label "AssessAction" ;
    rdfs:comment "The act of forming one's opinion, reaction or sentiment." ;
    rdfs:subClassOf schema:Action .

schema:AssignAction a rdfs:Class ;
    rdfs:label "AssignAction" ;
    rdfs:comment "The act of allocating an action/event/task to some destination (someone or something)." ;
    rdfs:subClassOf schema:AllocateAction .

schema:Attorney a rdfs:Class ;
    rdfs:label "Attorney" ;
    rdfs:comment """Professional service: Attorney. <br/><br/>

This type is deprecated - <a class="localLink" href="http://schema.org/LegalService">LegalService</a> is more inclusive and less ambiguous.""" ;
    rdfs:subClassOf schema:LegalService .

schema:Audience a rdfs:Class ;
    rdfs:label "Audience" ;
    rdfs:comment "Intended audience for an item, i.e. the group for whom the item was created." ;
    rdfs:subClassOf schema:Intangible .

schema:AudioObject a rdfs:Class ;
    rdfs:label "AudioObject" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews> ;
    rdfs:comment "An audio file." ;
    rdfs:subClassOf schema:MediaObject .

schema:AuthorizeAction a rdfs:Class ;
    rdfs:label "AuthorizeAction" ;
    rdfs:comment "The act of granting permission to an object." ;
    rdfs:subClassOf schema:AllocateAction .

schema:AutoBodyShop a rdfs:Class ;
    rdfs:label "AutoBodyShop" ;
    rdfs:comment "Auto body shop." ;
    rdfs:subClassOf schema:AutomotiveBusiness .

schema:AutoDealer a rdfs:Class ;
    rdfs:label "AutoDealer" ;
    rdfs:comment "An car dealership." ;
    rdfs:subClassOf schema:AutomotiveBusiness .

schema:AutoPartsStore a rdfs:Class ;
    rdfs:label "AutoPartsStore" ;
    rdfs:comment "An auto parts store." ;
    rdfs:subClassOf schema:AutomotiveBusiness,
        schema:Store .

schema:AutoRental a rdfs:Class ;
    rdfs:label "AutoRental" ;
    rdfs:comment "A car rental business." ;
    rdfs:subClassOf schema:AutomotiveBusiness .

schema:AutoRepair a rdfs:Class ;
    rdfs:label "AutoRepair" ;
    rdfs:comment "Car repair business." ;
    rdfs:subClassOf schema:AutomotiveBusiness .

schema:AutoWash a rdfs:Class ;
    rdfs:label "AutoWash" ;
    rdfs:comment "A car wash business." ;
    rdfs:subClassOf schema:AutomotiveBusiness .

schema:AutomatedTeller a rdfs:Class ;
    rdfs:label "AutomatedTeller" ;
    rdfs:comment "ATM/cash machine." ;
    rdfs:subClassOf schema:FinancialService .

schema:AutomotiveBusiness a rdfs:Class ;
    rdfs:label "AutomotiveBusiness" ;
    rdfs:comment "Car repair, sales, or parts." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:Bakery a rdfs:Class ;
    rdfs:label "Bakery" ;
    rdfs:comment "A bakery." ;
    rdfs:subClassOf schema:FoodEstablishment .

schema:BankAccount a rdfs:Class ;
    rdfs:label "BankAccount" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO> ;
    rdfs:comment "A product or service offered by a bank whereby one may deposit, withdraw or transfer money and in some cases be paid interest." ;
    rdfs:subClassOf schema:FinancialProduct .

schema:BankOrCreditUnion a rdfs:Class ;
    rdfs:label "BankOrCreditUnion" ;
    rdfs:comment "Bank or credit union." ;
    rdfs:subClassOf schema:FinancialService .

schema:BarOrPub a rdfs:Class ;
    rdfs:label "BarOrPub" ;
    rdfs:comment "A bar or pub." ;
    rdfs:subClassOf schema:FoodEstablishment .

schema:Barcode a rdfs:Class ;
    rdfs:label "Barcode" ;
    rdfs:comment "An image of a visual machine-readable code such as a barcode or QR code." ;
    rdfs:subClassOf schema:ImageObject .

schema:Beach a rdfs:Class ;
    rdfs:label "Beach" ;
    rdfs:comment "Beach." ;
    rdfs:subClassOf schema:CivicStructure .

schema:BeautySalon a rdfs:Class ;
    rdfs:label "BeautySalon" ;
    rdfs:comment "Beauty salon." ;
    rdfs:subClassOf schema:HealthAndBeautyBusiness .

schema:BedAndBreakfast a rdfs:Class ;
    rdfs:label "BedAndBreakfast" ;
    rdfs:comment """Bed and breakfast.
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.""" ;
    rdfs:subClassOf schema:LodgingBusiness .

schema:BedDetails a rdfs:Class ;
    rdfs:label "BedDetails" ;
    dct:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> ;
    rdfs:comment "An entity holding detailed information about the available bed types, e.g. the quantity of twin beds for a hotel room. For the single case of just one bed of a certain type, you can use bed directly with a text. See also <a class=\"localLink\" href=\"http://schema.org/BedType\">BedType</a> (under development)." ;
    rdfs:subClassOf schema:Intangible .

schema:BedType a rdfs:Class ;
    rdfs:label "BedType" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1262>,
        <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> ;
    schema:category "issue-1262" ;
    rdfs:comment "A type of bed. This is used for indicating the bed or beds available in an accommodation." ;
    rdfs:subClassOf schema:QualitativeValue .

schema:BefriendAction a rdfs:Class ;
    rdfs:label "BefriendAction" ;
    rdfs:comment """The act of forming a personal connection with someone (object) mutually/bidirectionally/symmetrically.<br/><br/>

Related actions:<br/><br/>

<ul>
<li><a class="localLink" href="http://schema.org/FollowAction">FollowAction</a>: Unlike FollowAction, BefriendAction implies that the connection is reciprocal.</li>
</ul>
""" ;
    rdfs:subClassOf schema:InteractAction .

schema:BikeStore a rdfs:Class ;
    rdfs:label "BikeStore" ;
    rdfs:comment "A bike store." ;
    rdfs:subClassOf schema:Store .

schema:Blog a rdfs:Class ;
    rdfs:label "Blog" ;
    rdfs:comment "A blog." ;
    rdfs:subClassOf schema:CreativeWork .

schema:BlogPosting a rdfs:Class ;
    rdfs:label "BlogPosting" ;
    rdfs:comment "A blog post." ;
    rdfs:subClassOf schema:SocialMediaPosting .

schema:BoardingPolicyType a rdfs:Class ;
    rdfs:label "BoardingPolicyType" ;
    rdfs:comment "A type of boarding policy used by an airline." ;
    rdfs:subClassOf schema:Enumeration .

schema:BodyOfWater a rdfs:Class ;
    rdfs:label "BodyOfWater" ;
    rdfs:comment "A body of water, such as a sea, ocean, or lake." ;
    rdfs:subClassOf schema:Landform .

schema:Book a rdfs:Class ;
    rdfs:label "Book" ;
    rdfs:comment "A book." ;
    rdfs:subClassOf schema:CreativeWork .

schema:BookFormatType a rdfs:Class ;
    rdfs:label "BookFormatType" ;
    rdfs:comment "The publication format of the book." ;
    rdfs:subClassOf schema:Enumeration .

schema:BookSeries a rdfs:Class ;
    rdfs:label "BookSeries" ;
    rdfs:comment "A series of books. Included books can be indicated with the hasPart property." ;
    rdfs:subClassOf schema:CreativeWorkSeries .

schema:BookStore a rdfs:Class ;
    rdfs:label "BookStore" ;
    rdfs:comment "A bookstore." ;
    rdfs:subClassOf schema:Store .

schema:BookmarkAction a rdfs:Class ;
    rdfs:label "BookmarkAction" ;
    rdfs:comment "An agent bookmarks/flags/labels/tags/marks an object." ;
    rdfs:subClassOf schema:OrganizeAction .

schema:Boolean a schema:DataType,
        rdfs:Class ;
    rdfs:label "Boolean" ;
    rdfs:comment "Boolean: True or False." .

schema:BorrowAction a rdfs:Class ;
    rdfs:label "BorrowAction" ;
    rdfs:comment """The act of obtaining an object under an agreement to return it at a later date. Reciprocal of LendAction.<br/><br/>

Related actions:<br/><br/>

<ul>
<li><a class="localLink" href="http://schema.org/LendAction">LendAction</a>: Reciprocal of BorrowAction.</li>
</ul>
""" ;
    rdfs:subClassOf schema:TransferAction .

schema:BowlingAlley a rdfs:Class ;
    rdfs:label "BowlingAlley" ;
    rdfs:comment "A bowling alley." ;
    rdfs:subClassOf schema:SportsActivityLocation .

schema:Brand a rdfs:Class ;
    rdfs:label "Brand" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> ;
    rdfs:comment "A brand is a name used by an organization or business person for labeling a product, product group, or similar." ;
    rdfs:subClassOf schema:Intangible .

schema:BreadcrumbList a rdfs:Class ;
    rdfs:label "BreadcrumbList" ;
    rdfs:comment """A BreadcrumbList is an ItemList consisting of a chain of linked Web pages, typically described using at least their URL and their name, and typically ending with the current page.<br/><br/>

The <a class="localLink" href="http://schema.org/position">position</a> property is used to reconstruct the order of the items in a BreadcrumbList The convention is that a breadcrumb list has an <a class="localLink" href="http://schema.org/itemListOrder">itemListOrder</a> of <a class="localLink" href="http://schema.org/ItemListOrderAscending">ItemListOrderAscending</a> (lower values listed first), and that the first items in this list correspond to the "top" or beginning of the breadcrumb trail, e.g. with a site or section homepage. The specific values of 'position' are not assigned meaning for a BreadcrumbList, but they should be integers, e.g. beginning with '1' for the first item in the list.""" ;
    rdfs:subClassOf schema:ItemList .

schema:Brewery a rdfs:Class ;
    rdfs:label "Brewery" ;
    rdfs:comment "Brewery." ;
    rdfs:subClassOf schema:FoodEstablishment .

schema:Bridge a rdfs:Class ;
    rdfs:label "Bridge" ;
    rdfs:comment "A bridge." ;
    rdfs:subClassOf schema:CivicStructure .

schema:BroadcastChannel a rdfs:Class ;
    rdfs:label "BroadcastChannel" ;
    rdfs:comment "A unique instance of a BroadcastService on a CableOrSatelliteService lineup." ;
    rdfs:subClassOf schema:Intangible .

schema:BroadcastEvent a rdfs:Class ;
    rdfs:label "BroadcastEvent" ;
    rdfs:comment "An over the air or online broadcast event." ;
    rdfs:subClassOf schema:PublicationEvent .

schema:BroadcastFrequencySpecification a rdfs:Class ;
    rdfs:label "BroadcastFrequencySpecification" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1004> ;
    schema:category "issue-1004" ;
    rdfs:comment "The frequency in MHz and the modulation used for a particular BroadcastService." ;
    rdfs:subClassOf schema:Intangible .

schema:BroadcastService a rdfs:Class ;
    rdfs:label "BroadcastService" ;
    rdfs:comment "A delivery service through which content is provided via broadcast over the air or online." ;
    rdfs:subClassOf schema:Service .

schema:BuddhistTemple a rdfs:Class ;
    rdfs:label "BuddhistTemple" ;
    rdfs:comment "A Buddhist temple." ;
    rdfs:subClassOf schema:PlaceOfWorship .

schema:BusReservation a rdfs:Class ;
    rdfs:label "BusReservation" ;
    rdfs:comment """A reservation for bus travel. <br/><br/>

Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use <a class="localLink" href="http://schema.org/Offer">Offer</a>.""" ;
    rdfs:subClassOf schema:Reservation .

schema:BusStation a rdfs:Class ;
    rdfs:label "BusStation" ;
    rdfs:comment "A bus station." ;
    rdfs:subClassOf schema:CivicStructure .

schema:BusStop a rdfs:Class ;
    rdfs:label "BusStop" ;
    rdfs:comment "A bus stop." ;
    rdfs:subClassOf schema:CivicStructure .

schema:BusTrip a rdfs:Class ;
    rdfs:label "BusTrip" ;
    rdfs:comment "A trip on a commercial bus line." ;
    rdfs:subClassOf schema:Trip .

schema:BusinessAudience a rdfs:Class ;
    rdfs:label "BusinessAudience" ;
    rdfs:comment "A set of characteristics belonging to businesses, e.g. who compose an item's target audience." ;
    rdfs:subClassOf schema:Audience .

schema:BusinessEntityType a rdfs:Class ;
    rdfs:label "BusinessEntityType" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> ;
    rdfs:comment """A business entity type is a conceptual entity representing the legal form, the size, the main line of business, the position in the value chain, or any combination thereof, of an organization or business person.<br/><br/>

Commonly used values:<br/><br/>

<ul>
<li>http://purl.org/goodrelations/v1#Business</li>
<li>http://purl.org/goodrelations/v1#Enduser</li>
<li>http://purl.org/goodrelations/v1#PublicInstitution</li>
<li>http://purl.org/goodrelations/v1#Reseller</li>
</ul>
""" ;
    rdfs:subClassOf schema:Enumeration .

schema:BusinessEvent a rdfs:Class ;
    rdfs:label "BusinessEvent" ;
    rdfs:comment "Event type: Business event." ;
    rdfs:subClassOf schema:Event .

schema:BusinessFunction a rdfs:Class ;
    rdfs:label "BusinessFunction" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> ;
    rdfs:comment """The business function specifies the type of activity or access (i.e., the bundle of rights) offered by the organization or business person through the offer. Typical are sell, rental or lease, maintenance or repair, manufacture / produce, recycle / dispose, engineering / construction, or installation. Proprietary specifications of access rights are also instances of this class.<br/><br/>

Commonly used values:<br/><br/>

<ul>
<li>http://purl.org/goodrelations/v1#ConstructionInstallation</li>
<li>http://purl.org/goodrelations/v1#Dispose</li>
<li>http://purl.org/goodrelations/v1#LeaseOut</li>
<li>http://purl.org/goodrelations/v1#Maintain</li>
<li>http://purl.org/goodrelations/v1#ProvideService</li>
<li>http://purl.org/goodrelations/v1#Repair</li>
<li>http://purl.org/goodrelations/v1#Sell</li>
<li>http://purl.org/goodrelations/v1#Buy</li>
</ul>
""" ;
    rdfs:subClassOf schema:Enumeration .

schema:BuyAction a rdfs:Class ;
    rdfs:label "BuyAction" ;
    rdfs:comment "The act of giving money to a seller in exchange for goods or services rendered. An agent buys an object, product, or service from a seller for a price. Reciprocal of SellAction." ;
    rdfs:subClassOf schema:TradeAction .

schema:CableOrSatelliteService a rdfs:Class ;
    rdfs:label "CableOrSatelliteService" ;
    rdfs:comment "A service which provides access to media programming like TV or radio. Access may be via cable or satellite." ;
    rdfs:subClassOf schema:Service .

schema:CafeOrCoffeeShop a rdfs:Class ;
    rdfs:label "CafeOrCoffeeShop" ;
    rdfs:comment "A cafe or coffee shop." ;
    rdfs:subClassOf schema:FoodEstablishment .

schema:Campground a rdfs:Class ;
    rdfs:label "Campground" ;
    dct:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> ;
    rdfs:comment """A camping site, campsite, or <a class="localLink" href="http://schema.org/Campground">Campground</a> is a place used for overnight stay in the outdoors, typically containing individual <a class="localLink" href="http://schema.org/CampingPitch">CampingPitch</a> locations. <br/><br/>

In British English a campsite is an area, usually divided into a number of pitches, where people can camp overnight using tents or camper vans or caravans; this British English use of the word is synonymous with the American English expression campground. In American English the term campsite generally means an area where an individual, family, group, or military unit can pitch a tent or park a camper; a campground may contain many campsites (Source: Wikipedia see <a href="https://en.wikipedia.org/wiki/Campsite">https://en.wikipedia.org/wiki/Campsite</a>).<br/><br/>

See also the dedicated <a href="/docs/hotels.html">document on the use of schema.org for marking up hotels and other forms of accommodations</a>.""" ;
    rdfs:subClassOf schema:CivicStructure,
        schema:LodgingBusiness .

schema:CampingPitch a rdfs:Class ;
    rdfs:label "CampingPitch" ;
    dct:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> ;
    rdfs:comment """A <a class="localLink" href="http://schema.org/CampingPitch">CampingPitch</a> is an individual place for overnight stay in the outdoors, typically being part of a larger camping site, or <a class="localLink" href="http://schema.org/Campground">Campground</a>.<br/><br/>

In British English a campsite, or campground, is an area, usually divided into a number of pitches, where people can camp overnight using tents or camper vans or caravans; this British English use of the word is synonymous with the American English expression campground. In American English the term campsite generally means an area where an individual, family, group, or military unit can pitch a tent or park a camper; a campground may contain many campsites.
(Source: Wikipedia see <a href="https://en.wikipedia.org/wiki/Campsite">https://en.wikipedia.org/wiki/Campsite</a>).<br/><br/>

See also the dedicated <a href="/docs/hotels.html">document on the use of schema.org for marking up hotels and other forms of accommodations</a>.""" ;
    rdfs:subClassOf schema:Accommodation .

schema:Canal a rdfs:Class ;
    rdfs:label "Canal" ;
    rdfs:comment "A canal, like the Panama Canal." ;
    rdfs:subClassOf schema:BodyOfWater .

schema:CancelAction a rdfs:Class ;
    rdfs:label "CancelAction" ;
    rdfs:comment """The act of asserting that a future event/action is no longer going to happen.<br/><br/>

Related actions:<br/><br/>

<ul>
<li><a class="localLink" href="http://schema.org/ConfirmAction">ConfirmAction</a>: The antonym of CancelAction.</li>
</ul>
""" ;
    rdfs:subClassOf schema:PlanAction .

schema:Car a rdfs:Class ;
    rdfs:label "Car" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> ;
    rdfs:comment "A car is a wheeled, self-powered motor vehicle used for transportation." ;
    rdfs:subClassOf schema:Vehicle .

schema:Casino a rdfs:Class ;
    rdfs:label "Casino" ;
    rdfs:comment "A casino." ;
    rdfs:subClassOf schema:EntertainmentBusiness .

schema:CatholicChurch a rdfs:Class ;
    rdfs:label "CatholicChurch" ;
    rdfs:comment "A Catholic church." ;
    rdfs:subClassOf schema:Church .

schema:Cemetery a rdfs:Class ;
    rdfs:label "Cemetery" ;
    rdfs:comment "A graveyard." ;
    rdfs:subClassOf schema:CivicStructure .

schema:CheckAction a rdfs:Class ;
    rdfs:label "CheckAction" ;
    rdfs:comment "An agent inspects, determines, investigates, inquires, or examines an object's accuracy, quality, condition, or state." ;
    rdfs:subClassOf schema:FindAction .

schema:CheckInAction a rdfs:Class ;
    rdfs:label "CheckInAction" ;
    rdfs:comment """The act of an agent communicating (service provider, social media, etc) their arrival by registering/confirming for a previously reserved service (e.g. flight check in) or at a place (e.g. hotel), possibly resulting in a result (boarding pass, etc).<br/><br/>

Related actions:<br/><br/>

<ul>
<li><a class="localLink" href="http://schema.org/CheckOutAction">CheckOutAction</a>: The antonym of CheckInAction.</li>
<li><a class="localLink" href="http://schema.org/ArriveAction">ArriveAction</a>: Unlike ArriveAction, CheckInAction implies that the agent is informing/confirming the start of a previously reserved service.</li>
<li><a class="localLink" href="http://schema.org/ConfirmAction">ConfirmAction</a>: Unlike ConfirmAction, CheckInAction implies that the agent is informing/confirming the <em>start</em> of a previously reserved service rather than its validity/existence.</li>
</ul>
""" ;
    rdfs:subClassOf schema:CommunicateAction .

schema:CheckOutAction a rdfs:Class ;
    rdfs:label "CheckOutAction" ;
    rdfs:comment """The act of an agent communicating (service provider, social media, etc) their departure of a previously reserved service (e.g. flight check in) or place (e.g. hotel).<br/><br/>

Related actions:<br/><br/>

<ul>
<li><a class="localLink" href="http://schema.org/CheckInAction">CheckInAction</a>: The antonym of CheckOutAction.</li>
<li><a class="localLink" href="http://schema.org/DepartAction">DepartAction</a>: Unlike DepartAction, CheckOutAction implies that the agent is informing/confirming the end of a previously reserved service.</li>
<li><a class="localLink" href="http://schema.org/CancelAction">CancelAction</a>: Unlike CancelAction, CheckOutAction implies that the agent is informing/confirming the end of a previously reserved service.</li>
</ul>
""" ;
    rdfs:subClassOf schema:CommunicateAction .

schema:CheckoutPage a rdfs:Class ;
    rdfs:label "CheckoutPage" ;
    rdfs:comment "Web page type: Checkout page." ;
    rdfs:subClassOf schema:WebPage .

schema:ChildCare a rdfs:Class ;
    rdfs:label "ChildCare" ;
    rdfs:comment "A Childcare center." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:ChildrensEvent a rdfs:Class ;
    rdfs:label "ChildrensEvent" ;
    rdfs:comment "Event type: Children's event." ;
    rdfs:subClassOf schema:Event .

schema:ChooseAction a rdfs:Class ;
    rdfs:label "ChooseAction" ;
    rdfs:comment "The act of expressing a preference from a set of options or a large or unbounded set of choices/options." ;
    rdfs:subClassOf schema:AssessAction .

schema:Church a rdfs:Class ;
    rdfs:label "Church" ;
    rdfs:comment "A church." ;
    rdfs:subClassOf schema:PlaceOfWorship .

schema:City a rdfs:Class ;
    rdfs:label "City" ;
    rdfs:comment "A city or town." ;
    rdfs:subClassOf schema:AdministrativeArea .

schema:CityHall a rdfs:Class ;
    rdfs:label "CityHall" ;
    rdfs:comment "A city hall." ;
    rdfs:subClassOf schema:GovernmentBuilding .

schema:CivicStructure a rdfs:Class ;
    rdfs:label "CivicStructure" ;
    rdfs:comment "A public structure, such as a town hall or concert hall." ;
    rdfs:subClassOf schema:Place .

schema:ClaimReview a rdfs:Class ;
    rdfs:label "ClaimReview" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1061> ;
    schema:category "issue-1061" ;
    rdfs:comment "A fact-checking review of claims made (or reported) in some creative work (referenced via itemReviewed)." ;
    rdfs:subClassOf schema:Review .

schema:Clip a rdfs:Class ;
    rdfs:label "Clip" ;
    rdfs:comment "A short TV or radio program or a segment/part of a program." ;
    rdfs:subClassOf schema:CreativeWork .

schema:ClothingStore a rdfs:Class ;
    rdfs:label "ClothingStore" ;
    rdfs:comment "A clothing store." ;
    rdfs:subClassOf schema:Store .

schema:Code a rdfs:Class ;
    rdfs:label "Code" ;
    schema:supersededBy schema:SoftwareSourceCode ;
    rdfs:comment "Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates." ;
    rdfs:subClassOf schema:CreativeWork .

schema:CollectionPage a rdfs:Class ;
    rdfs:label "CollectionPage" ;
    rdfs:comment "Web page type: Collection page." ;
    rdfs:subClassOf schema:WebPage .

schema:CollegeOrUniversity a rdfs:Class ;
    rdfs:label "CollegeOrUniversity" ;
    rdfs:comment "A college, university, or other third-level educational institution." ;
    rdfs:subClassOf schema:EducationalOrganization .

schema:ComedyClub a rdfs:Class ;
    rdfs:label "ComedyClub" ;
    rdfs:comment "A comedy club." ;
    rdfs:subClassOf schema:EntertainmentBusiness .

schema:ComedyEvent a rdfs:Class ;
    rdfs:label "ComedyEvent" ;
    rdfs:comment "Event type: Comedy event." ;
    rdfs:subClassOf schema:Event .

schema:Comment a rdfs:Class ;
    rdfs:label "Comment" ;
    rdfs:comment "A comment on an item - for example, a comment on a blog post. The comment's content is expressed via the <a class=\"localLink\" href=\"http://schema.org/text\">text</a> property, and its topic via <a class=\"localLink\" href=\"http://schema.org/about\">about</a>, properties shared with all CreativeWorks." ;
    rdfs:subClassOf schema:CreativeWork .

schema:CommentAction a rdfs:Class ;
    rdfs:label "CommentAction" ;
    rdfs:comment "The act of generating a comment about a subject." ;
    rdfs:subClassOf schema:CommunicateAction .

schema:CommunicateAction a rdfs:Class ;
    rdfs:label "CommunicateAction" ;
    rdfs:comment "The act of conveying information to another person via a communication medium (instrument) such as speech, email, or telephone conversation." ;
    rdfs:subClassOf schema:InteractAction .

schema:CompoundPriceSpecification a rdfs:Class ;
    rdfs:label "CompoundPriceSpecification" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> ;
    rdfs:comment "A compound price specification is one that bundles multiple prices that all apply in combination for different dimensions of consumption. Use the name property of the attached unit price specification for indicating the dimension of a price component (e.g. \"electricity\" or \"final cleaning\")." ;
    rdfs:subClassOf schema:PriceSpecification .

schema:ComputerLanguage a rdfs:Class ;
    rdfs:label "ComputerLanguage" ;
    rdfs:comment "This type covers computer programming languages such as Scheme and Lisp, as well as other language-like computer representations. Natural languages are best represented with the <a class=\"localLink\" href=\"http://schema.org/Language\">Language</a> type." ;
    rdfs:subClassOf schema:Intangible .

schema:ComputerStore a rdfs:Class ;
    rdfs:label "ComputerStore" ;
    rdfs:comment "A computer store." ;
    rdfs:subClassOf schema:Store .

schema:ConfirmAction a rdfs:Class ;
    rdfs:label "ConfirmAction" ;
    rdfs:comment """The act of notifying someone that a future event/action is going to happen as expected.<br/><br/>

Related actions:<br/><br/>

<ul>
<li><a class="localLink" href="http://schema.org/CancelAction">CancelAction</a>: The antonym of ConfirmAction.</li>
</ul>
""" ;
    rdfs:subClassOf schema:InformAction .

schema:ConsumeAction a rdfs:Class ;
    rdfs:label "ConsumeAction" ;
    rdfs:comment "The act of ingesting information/resources/food." ;
    rdfs:subClassOf schema:Action .

schema:ContactPage a rdfs:Class ;
    rdfs:label "ContactPage" ;
    rdfs:comment "Web page type: Contact page." ;
    rdfs:subClassOf schema:WebPage .

schema:ContactPoint a rdfs:Class ;
    rdfs:label "ContactPoint" ;
    rdfs:comment "A contact point&#x2014;for example, a Customer Complaints department." ;
    rdfs:subClassOf schema:StructuredValue .

schema:ContactPointOption a rdfs:Class ;
    rdfs:label "ContactPointOption" ;
    rdfs:comment "Enumerated options related to a ContactPoint." ;
    rdfs:subClassOf schema:Enumeration .

schema:Continent a rdfs:Class ;
    rdfs:label "Continent" ;
    rdfs:comment "One of the continents (for example, Europe or Africa)." ;
    rdfs:subClassOf schema:Landform .

schema:ControlAction a rdfs:Class ;
    rdfs:label "ControlAction" ;
    rdfs:comment "An agent controls a device or application." ;
    rdfs:subClassOf schema:Action .

schema:ConvenienceStore a rdfs:Class ;
    rdfs:label "ConvenienceStore" ;
    rdfs:comment "A convenience store." ;
    rdfs:subClassOf schema:Store .

schema:Conversation a rdfs:Class ;
    rdfs:label "Conversation" ;
    rdfs:comment "One or more messages between organizations or people on a particular topic. Individual messages can be linked to the conversation with isPartOf or hasPart properties." ;
    rdfs:subClassOf schema:CreativeWork .

schema:CookAction a rdfs:Class ;
    rdfs:label "CookAction" ;
    rdfs:comment "The act of producing/preparing food." ;
    rdfs:subClassOf schema:CreateAction .

schema:Corporation a rdfs:Class ;
    rdfs:label "Corporation" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews> ;
    rdfs:comment "Organization: A business corporation." ;
    rdfs:subClassOf schema:Organization .

schema:Country a rdfs:Class ;
    rdfs:label "Country" ;
    rdfs:comment "A country." ;
    rdfs:subClassOf schema:AdministrativeArea .

schema:Course a rdfs:Class ;
    rdfs:label "Course" ;
    rdfs:comment "A description of an educational course which may be offered as distinct instances at which take place at different times or take place at different locations, or be offered through different media or modes of study. An educational course is a sequence of one or more educational events and/or creative works which aims to build knowledge, competence or ability of learners." ;
    rdfs:subClassOf schema:CreativeWork .

schema:CourseInstance a rdfs:Class ;
    rdfs:label "CourseInstance" ;
    rdfs:comment "An instance of a <a class=\"localLink\" href=\"http://schema.org/Course\">Course</a> which is distinct from other instances because it is offered at a different time or location or through different media or modes of study or to a specific section of students." ;
    rdfs:subClassOf schema:Event .

schema:Courthouse a rdfs:Class ;
    rdfs:label "Courthouse" ;
    rdfs:comment "A courthouse." ;
    rdfs:subClassOf schema:GovernmentBuilding .

schema:CreateAction a rdfs:Class ;
    rdfs:label "CreateAction" ;
    rdfs:comment "The act of deliberately creating/producing/generating/building a result out of the agent." ;
    rdfs:subClassOf schema:Action .

schema:CreativeWork a rdfs:Class ;
    rdfs:label "CreativeWork" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews> ;
    rdfs:comment "The most generic kind of creative work, including books, movies, photographs, software programs, etc." ;
    rdfs:subClassOf schema:Thing .

schema:CreativeWorkSeason a rdfs:Class ;
    rdfs:label "CreativeWorkSeason" ;
    rdfs:comment "A media season e.g. tv, radio, video game etc." ;
    rdfs:subClassOf schema:CreativeWork .

schema:CreativeWorkSeries a rdfs:Class ;
    rdfs:label "CreativeWorkSeries" ;
    rdfs:comment """A CreativeWorkSeries in schema.org is a group of related items, typically but not necessarily of the same kind. CreativeWorkSeries are usually organized into some order, often chronological. Unlike <a class="localLink" href="http://schema.org/ItemList">ItemList</a> which is a general purpose data structure for lists of things, the emphasis with CreativeWorkSeries is on published materials (written e.g. books and periodicals, or media such as tv, radio and games).<br/><br/>

Specific subtypes are available for describing <a class="localLink" href="http://schema.org/TVSeries">TVSeries</a>, <a class="localLink" href="http://schema.org/RadioSeries">RadioSeries</a>, <a class="localLink" href="http://schema.org/MovieSeries">MovieSeries</a>, <a class="localLink" href="http://schema.org/BookSeries">BookSeries</a>, <a class="localLink" href="http://schema.org/Periodical">Periodical</a> and <a class="localLink" href="http://schema.org/VideoGameSeries">VideoGameSeries</a>. In each case, the <a class="localLink" href="http://schema.org/hasPart">hasPart</a> / <a class="localLink" href="http://schema.org/isPartOf">isPartOf</a> properties can be used to relate the CreativeWorkSeries to its parts. The general CreativeWorkSeries type serves largely just to organize these more specific and practical subtypes.<br/><br/>

It is common for properties applicable to an item from the series to be usefully applied to the containing group. Schema.org attempts to anticipate some of these cases, but publishers should be free to apply properties of the series parts to the series as a whole wherever they seem appropriate.""" ;
    rdfs:subClassOf schema:CreativeWork,
        schema:Series .

schema:CreditCard a rdfs:Class ;
    rdfs:label "CreditCard" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO>,
        <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> ;
    rdfs:comment """A card payment method of a particular brand or name.  Used to mark up a particular payment method and/or the financial product/service that supplies the card account.<br/><br/>

Commonly used values:<br/><br/>

<ul>
<li>http://purl.org/goodrelations/v1#AmericanExpress</li>
<li>http://purl.org/goodrelations/v1#DinersClub</li>
<li>http://purl.org/goodrelations/v1#Discover</li>
<li>http://purl.org/goodrelations/v1#JCB</li>
<li>http://purl.org/goodrelations/v1#MasterCard</li>
<li>http://purl.org/goodrelations/v1#VISA</li>
</ul>
""" ;
    rdfs:subClassOf schema:LoanOrCredit,
        schema:PaymentCard .

schema:Crematorium a rdfs:Class ;
    rdfs:label "Crematorium" ;
    rdfs:comment "A crematorium." ;
    rdfs:subClassOf schema:CivicStructure .

schema:CurrencyConversionService a rdfs:Class ;
    rdfs:label "CurrencyConversionService" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO> ;
    rdfs:comment "A service to convert funds from one currency to another currency." ;
    rdfs:subClassOf schema:FinancialProduct .

schema:DanceEvent a rdfs:Class ;
    rdfs:label "DanceEvent" ;
    rdfs:comment "Event type: A social dance." ;
    rdfs:subClassOf schema:Event .

schema:DanceGroup a rdfs:Class ;
    rdfs:label "DanceGroup" ;
    rdfs:comment "A dance group&#x2014;for example, the Alvin Ailey Dance Theater or Riverdance." ;
    rdfs:subClassOf schema:PerformingGroup .

schema:DataCatalog a rdfs:Class ;
    rdfs:label "DataCatalog" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_DatasetClass> ;
    rdfs:comment "A collection of datasets." ;
    rdfs:subClassOf schema:CreativeWork ;
    owl:equivalentClass dcat:Catalog .

schema:DataDownload a rdfs:Class ;
    rdfs:label "DataDownload" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_DatasetClass> ;
    rdfs:comment "A dataset in downloadable form." ;
    rdfs:subClassOf schema:MediaObject ;
    owl:equivalentClass dcat:Distribution .

schema:DataFeed a rdfs:Class ;
    rdfs:label "DataFeed" ;
    rdfs:comment "A single feed providing structured information about one or more entities or topics." ;
    rdfs:subClassOf schema:Dataset .

schema:DataFeedItem a rdfs:Class ;
    rdfs:label "DataFeedItem" ;
    rdfs:comment "A single item within a larger data feed." ;
    rdfs:subClassOf schema:Intangible .

schema:DataType a rdfs:Class ;
    rdfs:label "DataType" ;
    rdfs:comment "The basic data types such as Integers, Strings, etc." ;
    rdfs:subClassOf rdfs:Class .

schema:Dataset a rdfs:Class ;
    rdfs:label "Dataset" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_DatasetClass> ;
    rdfs:comment "A body of structured information describing some topic(s) of interest." ;
    rdfs:subClassOf schema:CreativeWork ;
    owl:equivalentClass dctype:Dataset,
        void:Dataset,
        dcat:Dataset .

schema:Date a schema:DataType,
        rdfs:Class ;
    rdfs:label "Date" ;
    rdfs:comment "A date value in <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 date format</a>." .

schema:DateTime a schema:DataType,
        rdfs:Class ;
    rdfs:label "DateTime" ;
    rdfs:comment "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm] (see Chapter 5.4 of ISO 8601)." .

schema:DatedMoneySpecification a rdfs:Class ;
    rdfs:label "DatedMoneySpecification" ;
    schema:supersededBy schema:MonetaryAmount ;
    rdfs:comment "A DatedMoneySpecification represents monetary values with optional start and end dates. For example, this could represent an employee's salary over a specific period of time. <strong>Note:</strong> This type has been superseded by <a class=\"localLink\" href=\"http://schema.org/MonetaryAmount\">MonetaryAmount</a> use of that type is recommended" ;
    rdfs:subClassOf schema:StructuredValue .

schema:DayOfWeek a rdfs:Class ;
    rdfs:label "DayOfWeek" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> ;
    rdfs:comment """The day of the week, e.g. used to specify to which day the opening hours of an OpeningHoursSpecification refer.<br/><br/>

Originally, URLs from <a href="http://purl.org/goodrelations/v1">GoodRelations</a> were used (for <a class="localLink" href="http://schema.org/Monday">Monday</a>, <a class="localLink" href="http://schema.org/Tuesday">Tuesday</a>, <a class="localLink" href="http://schema.org/Wednesday">Wednesday</a>, <a class="localLink" href="http://schema.org/Thursday">Thursday</a>, <a class="localLink" href="http://schema.org/Friday">Friday</a>, <a class="localLink" href="http://schema.org/Saturday">Saturday</a>, <a class="localLink" href="http://schema.org/Sunday">Sunday</a> plus a special entry for <a class="localLink" href="http://schema.org/PublicHolidays">PublicHolidays</a>); these have now been integrated directly into schema.org.""" ;
    rdfs:subClassOf schema:Enumeration .

schema:DaySpa a rdfs:Class ;
    rdfs:label "DaySpa" ;
    rdfs:comment "A day spa." ;
    rdfs:subClassOf schema:HealthAndBeautyBusiness .

schema:DeactivateAction a rdfs:Class ;
    rdfs:label "DeactivateAction" ;
    rdfs:comment "The act of stopping or deactivating a device or application (e.g. stopping a timer or turning off a flashlight)." ;
    rdfs:subClassOf schema:ControlAction .

schema:DefenceEstablishment a rdfs:Class ;
    rdfs:label "DefenceEstablishment" ;
    rdfs:comment "A defence establishment, such as an army or navy base." ;
    rdfs:subClassOf schema:GovernmentBuilding .

schema:DeleteAction a rdfs:Class ;
    rdfs:label "DeleteAction" ;
    rdfs:comment "The act of editing a recipient by removing one of its objects." ;
    rdfs:subClassOf schema:UpdateAction .

schema:DeliveryChargeSpecification a rdfs:Class ;
    rdfs:label "DeliveryChargeSpecification" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> ;
    rdfs:comment "The price for the delivery of an offer using a particular delivery method." ;
    rdfs:subClassOf schema:PriceSpecification .

schema:DeliveryEvent a rdfs:Class ;
    rdfs:label "DeliveryEvent" ;
    rdfs:comment "An event involving the delivery of an item." ;
    rdfs:subClassOf schema:Event .

schema:DeliveryMethod a rdfs:Class ;
    rdfs:label "DeliveryMethod" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> ;
    rdfs:comment """A delivery method is a standardized procedure for transferring the product or service to the destination of fulfillment chosen by the customer. Delivery methods are characterized by the means of transportation used, and by the organization or group that is the contracting party for the sending organization or person.<br/><br/>

Commonly used values:<br/><br/>

<ul>
<li>http://purl.org/goodrelations/v1#DeliveryModeDirectDownload</li>
<li>http://purl.org/goodrelations/v1#DeliveryModeFreight</li>
<li>http://purl.org/goodrelations/v1#DeliveryModeMail</li>
<li>http://purl.org/goodrelations/v1#DeliveryModeOwnFleet</li>
<li>http://purl.org/goodrelations/v1#DeliveryModePickUp</li>
<li>http://purl.org/goodrelations/v1#DHL</li>
<li>http://purl.org/goodrelations/v1#FederalExpress</li>
<li>http://purl.org/goodrelations/v1#UPS</li>
</ul>
""" ;
    rdfs:subClassOf schema:Enumeration .

schema:Demand a rdfs:Class ;
    rdfs:label "Demand" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> ;
    rdfs:comment "A demand entity represents the public, not necessarily binding, not necessarily exclusive, announcement by an organization or person to seek a certain type of goods or services. For describing demand using this type, the very same properties used for Offer apply." ;
    rdfs:subClassOf schema:Intangible .

schema:Dentist a rdfs:Class ;
    rdfs:label "Dentist" ;
    rdfs:comment "A dentist." ;
    rdfs:subClassOf schema:LocalBusiness,
        schema:MedicalBusiness,
        schema:MedicalOrganization .

schema:DepartAction a rdfs:Class ;
    rdfs:label "DepartAction" ;
    rdfs:comment "The act of  departing from a place. An agent departs from an fromLocation for a destination, optionally with participants." ;
    rdfs:subClassOf schema:MoveAction .

schema:DepartmentStore a rdfs:Class ;
    rdfs:label "DepartmentStore" ;
    rdfs:comment "A department store." ;
    rdfs:subClassOf schema:Store .

schema:DepositAccount a rdfs:Class ;
    rdfs:label "DepositAccount" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO> ;
    rdfs:comment "A type of Bank Account with a main purpose of depositing funds to gain interest or other benefits." ;
    rdfs:subClassOf schema:BankAccount,
        schema:InvestmentOrDeposit .

schema:DigitalDocument a rdfs:Class ;
    rdfs:label "DigitalDocument" ;
    rdfs:comment "An electronic file or document." ;
    rdfs:subClassOf schema:CreativeWork .

schema:DigitalDocumentPermission a rdfs:Class ;
    rdfs:label "DigitalDocumentPermission" ;
    rdfs:comment "A permission for a particular person or group to access a particular file." ;
    rdfs:subClassOf schema:Intangible .

schema:DigitalDocumentPermissionType a rdfs:Class ;
    rdfs:label "DigitalDocumentPermissionType" ;
    rdfs:comment "A type of permission which can be granted for accessing a digital document." ;
    rdfs:subClassOf schema:Enumeration .

schema:DisagreeAction a rdfs:Class ;
    rdfs:label "DisagreeAction" ;
    rdfs:comment "The act of expressing a difference of opinion with the object. An agent disagrees to/about an object (a proposition, topic or theme) with participants." ;
    rdfs:subClassOf schema:ReactAction .

schema:DiscoverAction a rdfs:Class ;
    rdfs:label "DiscoverAction" ;
    rdfs:comment "The act of discovering/finding an object." ;
    rdfs:subClassOf schema:FindAction .

schema:DiscussionForumPosting a rdfs:Class ;
    rdfs:label "DiscussionForumPosting" ;
    rdfs:comment "A posting to a discussion forum." ;
    rdfs:subClassOf schema:SocialMediaPosting .

schema:DislikeAction a rdfs:Class ;
    rdfs:label "DislikeAction" ;
    rdfs:comment "The act of expressing a negative sentiment about the object. An agent dislikes an object (a proposition, topic or theme) with participants." ;
    rdfs:subClassOf schema:ReactAction .

schema:Distance a rdfs:Class ;
    rdfs:label "Distance" ;
    rdfs:comment "Properties that take Distances as values are of the form '&lt;Number&gt; &lt;Length unit of measure&gt;'. E.g., '7 ft'." ;
    rdfs:subClassOf schema:Quantity .

schema:Distillery a rdfs:Class ;
    rdfs:label "Distillery" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/743> ;
    schema:category "issue-743" ;
    rdfs:comment "A distillery." ;
    rdfs:subClassOf schema:FoodEstablishment .

schema:DonateAction a rdfs:Class ;
    rdfs:label "DonateAction" ;
    rdfs:comment "The act of providing goods, services, or money without compensation, often for philanthropic reasons." ;
    rdfs:subClassOf schema:TradeAction .

schema:DownloadAction a rdfs:Class ;
    rdfs:label "DownloadAction" ;
    rdfs:comment "The act of downloading an object." ;
    rdfs:subClassOf schema:TransferAction .

schema:DrawAction a rdfs:Class ;
    rdfs:label "DrawAction" ;
    rdfs:comment "The act of producing a visual/graphical representation of an object, typically with a pen/pencil and paper as instruments." ;
    rdfs:subClassOf schema:CreateAction .

schema:DrinkAction a rdfs:Class ;
    rdfs:label "DrinkAction" ;
    rdfs:comment "The act of swallowing liquids." ;
    rdfs:subClassOf schema:ConsumeAction .

schema:DriveWheelConfigurationValue a rdfs:Class ;
    rdfs:label "DriveWheelConfigurationValue" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> ;
    rdfs:comment "A value indicating which roadwheels will receive torque." ;
    rdfs:subClassOf schema:QualitativeValue .

schema:DryCleaningOrLaundry a rdfs:Class ;
    rdfs:label "DryCleaningOrLaundry" ;
    rdfs:comment "A dry-cleaning business." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:Duration a rdfs:Class ;
    rdfs:label "Duration" ;
    rdfs:comment "Quantity: Duration (use <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 duration format</a>)." ;
    rdfs:subClassOf schema:Quantity .

schema:EatAction a rdfs:Class ;
    rdfs:label "EatAction" ;
    rdfs:comment "The act of swallowing solid objects." ;
    rdfs:subClassOf schema:ConsumeAction .

schema:EducationEvent a rdfs:Class ;
    rdfs:label "EducationEvent" ;
    rdfs:comment "Event type: Education event." ;
    rdfs:subClassOf schema:Event .

schema:EducationalAudience a rdfs:Class ;
    rdfs:label "EducationalAudience" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_LRMIClass> ;
    rdfs:comment "An EducationalAudience." ;
    rdfs:subClassOf schema:Audience .

schema:EducationalOrganization a rdfs:Class ;
    rdfs:label "EducationalOrganization" ;
    rdfs:comment "An educational organization." ;
    rdfs:subClassOf schema:Organization .

schema:Electrician a rdfs:Class ;
    rdfs:label "Electrician" ;
    rdfs:comment "An electrician." ;
    rdfs:subClassOf schema:HomeAndConstructionBusiness .

schema:ElectronicsStore a rdfs:Class ;
    rdfs:label "ElectronicsStore" ;
    rdfs:comment "An electronics store." ;
    rdfs:subClassOf schema:Store .

schema:ElementarySchool a rdfs:Class ;
    rdfs:label "ElementarySchool" ;
    rdfs:comment "An elementary school." ;
    rdfs:subClassOf schema:EducationalOrganization .

schema:EmailMessage a rdfs:Class ;
    rdfs:label "EmailMessage" ;
    rdfs:comment "An email message." ;
    rdfs:subClassOf schema:Message .

schema:Embassy a rdfs:Class ;
    rdfs:label "Embassy" ;
    rdfs:comment "An embassy." ;
    rdfs:subClassOf schema:GovernmentBuilding .

schema:EmergencyService a rdfs:Class ;
    rdfs:label "EmergencyService" ;
    rdfs:comment "An emergency service, such as a fire station or ER." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:EmployeeRole a rdfs:Class ;
    rdfs:label "EmployeeRole" ;
    rdfs:comment "A subclass of OrganizationRole used to describe employee relationships." ;
    rdfs:subClassOf schema:OrganizationRole .

schema:EmployerAggregateRating a rdfs:Class ;
    rdfs:label "EmployerAggregateRating" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1689> ;
    schema:category "issue-1689" ;
    rdfs:comment "An aggregate rating of an Organization related to its role as an employer." ;
    rdfs:subClassOf schema:AggregateRating .

schema:EmploymentAgency a rdfs:Class ;
    rdfs:label "EmploymentAgency" ;
    rdfs:comment "An employment agency." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:EndorseAction a rdfs:Class ;
    rdfs:label "EndorseAction" ;
    rdfs:comment "An agent approves/certifies/likes/supports/sanction an object." ;
    rdfs:subClassOf schema:ReactAction .

schema:EndorsementRating a rdfs:Class ;
    rdfs:label "EndorsementRating" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1293> ;
    schema:category "issue-1293" ;
    rdfs:comment """An EndorsementRating is a rating that expresses some level of endorsement, for example inclusion in a "critic's pick" blog, a
"Like" or "+1" on a social network. It can be considered the <a class="localLink" href="http://schema.org/result">result</a> of an <a class="localLink" href="http://schema.org/EndorseAction">EndorseAction</a> in which the <a class="localLink" href="http://schema.org/object">object</a> of the action is rated positively by
some <a class="localLink" href="http://schema.org/agent">agent</a>. As is common elsewhere in schema.org, it is sometimes more useful to describe the results of such an action without explicitly describing the <a class="localLink" href="http://schema.org/Action">Action</a>.<br/><br/>

An <a class="localLink" href="http://schema.org/EndorsementRating">EndorsementRating</a> may be part of a numeric scale or organized system, but this is not required: having an explicit type for indicating a positive,
endorsement rating is particularly useful in the absence of numeric scales as it helps consumers understand that the rating is broadly positive.""" ;
    rdfs:subClassOf schema:Rating .

schema:Energy a rdfs:Class ;
    rdfs:label "Energy" ;
    rdfs:comment "Properties that take Energy as values are of the form '&lt;Number&gt; &lt;Energy unit of measure&gt;'." ;
    rdfs:subClassOf schema:Quantity .

schema:EngineSpecification a rdfs:Class ;
    rdfs:label "EngineSpecification" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> ;
    rdfs:comment "Information about the engine of the vehicle. A vehicle can have multiple engines represented by multiple engine specification entities." ;
    rdfs:subClassOf schema:StructuredValue .

schema:EntertainmentBusiness a rdfs:Class ;
    rdfs:label "EntertainmentBusiness" ;
    rdfs:comment "A business providing entertainment." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:EntryPoint a rdfs:Class ;
    rdfs:label "EntryPoint" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_ActionCollabClass> ;
    rdfs:comment "An entry point, within some Web-based protocol." ;
    rdfs:subClassOf schema:Intangible .

schema:Enumeration a rdfs:Class ;
    rdfs:label "Enumeration" ;
    rdfs:comment "Lists or enumerations—for example, a list of cuisines or music genres, etc." ;
    rdfs:subClassOf schema:Intangible .

schema:Episode a rdfs:Class ;
    rdfs:label "Episode" ;
    rdfs:comment "A media episode (e.g. TV, radio, video game) which can be part of a series or season." ;
    rdfs:subClassOf schema:CreativeWork .

schema:Event a rdfs:Class ;
    rdfs:label "Event" ;
    rdfs:comment "An event happening at a certain time and location, such as a concert, lecture, or festival. Ticketing information may be added via the <a class=\"localLink\" href=\"http://schema.org/offers\">offers</a> property. Repeated events may be structured as separate Event objects." ;
    rdfs:subClassOf schema:Thing ;
    owl:equivalentClass dctype:Event .

schema:EventReservation a rdfs:Class ;
    rdfs:label "EventReservation" ;
    rdfs:comment """A reservation for an event like a concert, sporting event, or lecture.<br/><br/>

Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use <a class="localLink" href="http://schema.org/Offer">Offer</a>.""" ;
    rdfs:subClassOf schema:Reservation .

schema:EventStatusType a rdfs:Class ;
    rdfs:label "EventStatusType" ;
    rdfs:comment "EventStatusType is an enumeration type whose instances represent several states that an Event may be in." ;
    rdfs:subClassOf schema:Enumeration .

schema:EventVenue a rdfs:Class ;
    rdfs:label "EventVenue" ;
    rdfs:comment "An event venue." ;
    rdfs:subClassOf schema:CivicStructure .

schema:ExerciseAction a rdfs:Class ;
    rdfs:label "ExerciseAction" ;
    rdfs:comment "The act of participating in exertive activity for the purposes of improving health and fitness." ;
    rdfs:subClassOf schema:PlayAction .

schema:ExerciseGym a rdfs:Class ;
    rdfs:label "ExerciseGym" ;
    rdfs:comment "A gym." ;
    rdfs:subClassOf schema:SportsActivityLocation .

schema:ExhibitionEvent a rdfs:Class ;
    rdfs:label "ExhibitionEvent" ;
    rdfs:comment "Event type: Exhibition event, e.g. at a museum, library, archive, tradeshow, ..." ;
    rdfs:subClassOf schema:Event .

schema:FAQPage a rdfs:Class ;
    rdfs:label "FAQPage" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1723> ;
    schema:category "issue-1723" ;
    rdfs:comment "A <a class=\"localLink\" href=\"http://schema.org/FAQPage\">FAQPage</a> is a <a class=\"localLink\" href=\"http://schema.org/WebPage\">WebPage</a> presenting one or more \"<a href=\"https://en.wikipedia.org/wiki/FAQ\">Frequently asked questions</a>\" (see also <a class=\"localLink\" href=\"http://schema.org/QAPage\">QAPage</a>)." ;
    rdfs:subClassOf schema:WebPage .

schema:FMRadioChannel a rdfs:Class ;
    rdfs:label "FMRadioChannel" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1004> ;
    schema:category "issue-1004" ;
    rdfs:comment "A radio channel that uses FM." ;
    rdfs:subClassOf schema:RadioChannel .

schema:FastFoodRestaurant a rdfs:Class ;
    rdfs:label "FastFoodRestaurant" ;
    rdfs:comment "A fast-food restaurant." ;
    rdfs:subClassOf schema:FoodEstablishment .

schema:Festival a rdfs:Class ;
    rdfs:label "Festival" ;
    rdfs:comment "Event type: Festival." ;
    rdfs:subClassOf schema:Event .

schema:FilmAction a rdfs:Class ;
    rdfs:label "FilmAction" ;
    rdfs:comment "The act of capturing sound and moving images on film, video, or digitally." ;
    rdfs:subClassOf schema:CreateAction .

schema:FinancialProduct a rdfs:Class ;
    rdfs:label "FinancialProduct" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO> ;
    rdfs:comment "A product provided to consumers and businesses by financial institutions such as banks, insurance companies, brokerage firms, consumer finance companies, and investment companies which comprise the financial services industry." ;
    rdfs:subClassOf schema:Service .

schema:FinancialService a rdfs:Class ;
    rdfs:label "FinancialService" ;
    rdfs:comment "Financial services business." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:FindAction a rdfs:Class ;
    rdfs:label "FindAction" ;
    rdfs:comment """The act of finding an object.<br/><br/>

Related actions:<br/><br/>

<ul>
<li><a class="localLink" href="http://schema.org/SearchAction">SearchAction</a>: FindAction is generally lead by a SearchAction, but not necessarily.</li>
</ul>
""" ;
    rdfs:subClassOf schema:Action .

schema:FireStation a rdfs:Class ;
    rdfs:label "FireStation" ;
    rdfs:comment "A fire station. With firemen." ;
    rdfs:subClassOf schema:CivicStructure,
        schema:EmergencyService .

schema:Flight a rdfs:Class ;
    rdfs:label "Flight" ;
    rdfs:comment "An airline flight." ;
    rdfs:subClassOf schema:Trip .

schema:FlightReservation a rdfs:Class ;
    rdfs:label "FlightReservation" ;
    rdfs:comment """A reservation for air travel.<br/><br/>

Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use <a class="localLink" href="http://schema.org/Offer">Offer</a>.""" ;
    rdfs:subClassOf schema:Reservation .

schema:Float a rdfs:Class, schema:DataType ;
    rdfs:label "Float" ;
    rdfs:comment "Data type: Floating number." ;
    rdfs:subClassOf schema:Number .

schema:Florist a rdfs:Class ;
    rdfs:label "Florist" ;
    rdfs:comment "A florist." ;
    rdfs:subClassOf schema:Store .

schema:FollowAction a rdfs:Class ;
    rdfs:label "FollowAction" ;
    rdfs:comment """The act of forming a personal connection with someone/something (object) unidirectionally/asymmetrically to get updates polled from.<br/><br/>

Related actions:<br/><br/>

<ul>
<li><a class="localLink" href="http://schema.org/BefriendAction">BefriendAction</a>: Unlike BefriendAction, FollowAction implies that the connection is <em>not</em> necessarily reciprocal.</li>
<li><a class="localLink" href="http://schema.org/SubscribeAction">SubscribeAction</a>: Unlike SubscribeAction, FollowAction implies that the follower acts as an active agent constantly/actively polling for updates.</li>
<li><a class="localLink" href="http://schema.org/RegisterAction">RegisterAction</a>: Unlike RegisterAction, FollowAction implies that the agent is interested in continuing receiving updates from the object.</li>
<li><a class="localLink" href="http://schema.org/JoinAction">JoinAction</a>: Unlike JoinAction, FollowAction implies that the agent is interested in getting updates from the object.</li>
<li><a class="localLink" href="http://schema.org/TrackAction">TrackAction</a>: Unlike TrackAction, FollowAction refers to the polling of updates of all aspects of animate objects rather than the location of inanimate objects (e.g. you track a package, but you don't follow it).</li>
</ul>
""" ;
    rdfs:subClassOf schema:InteractAction .

schema:FoodEstablishment a rdfs:Class ;
    rdfs:label "FoodEstablishment" ;
    rdfs:comment "A food-related business." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:FoodEstablishmentReservation a rdfs:Class ;
    rdfs:label "FoodEstablishmentReservation" ;
    rdfs:comment """A reservation to dine at a food-related business.<br/><br/>

Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.""" ;
    rdfs:subClassOf schema:Reservation .

schema:FoodEvent a rdfs:Class ;
    rdfs:label "FoodEvent" ;
    rdfs:comment "Event type: Food event." ;
    rdfs:subClassOf schema:Event .

schema:FoodService a rdfs:Class ;
    rdfs:label "FoodService" ;
    dct:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> ;
    rdfs:comment "A food service, like breakfast, lunch, or dinner." ;
    rdfs:subClassOf schema:Service .

schema:FurnitureStore a rdfs:Class ;
    rdfs:label "FurnitureStore" ;
    rdfs:comment "A furniture store." ;
    rdfs:subClassOf schema:Store .

schema:Game a rdfs:Class ;
    rdfs:label "Game" ;
    rdfs:comment "The Game type represents things which are games. These are typically rule-governed recreational activities, e.g. role-playing games in which players assume the role of characters in a fictional setting." ;
    rdfs:subClassOf schema:CreativeWork .

schema:GamePlayMode a rdfs:Class ;
    rdfs:label "GamePlayMode" ;
    rdfs:comment "Indicates whether this game is multi-player, co-op or single-player." ;
    rdfs:subClassOf schema:Enumeration .

schema:GameServer a rdfs:Class ;
    rdfs:label "GameServer" ;
    rdfs:comment "Server that provides game interaction in a multiplayer game." ;
    rdfs:subClassOf schema:Intangible .

schema:GameServerStatus a rdfs:Class ;
    rdfs:label "GameServerStatus" ;
    rdfs:comment "Status of a game server." ;
    rdfs:subClassOf schema:Enumeration .

schema:GardenStore a rdfs:Class ;
    rdfs:label "GardenStore" ;
    rdfs:comment "A garden store." ;
    rdfs:subClassOf schema:Store .

schema:GasStation a rdfs:Class ;
    rdfs:label "GasStation" ;
    rdfs:comment "A gas station." ;
    rdfs:subClassOf schema:AutomotiveBusiness .

schema:GatedResidenceCommunity a rdfs:Class ;
    rdfs:label "GatedResidenceCommunity" ;
    rdfs:comment "Residence type: Gated community." ;
    rdfs:subClassOf schema:Residence .

schema:GenderType a rdfs:Class ;
    rdfs:label "GenderType" ;
    rdfs:comment "An enumeration of genders." ;
    rdfs:subClassOf schema:Enumeration .

schema:GeneralContractor a rdfs:Class ;
    rdfs:label "GeneralContractor" ;
    rdfs:comment "A general contractor." ;
    rdfs:subClassOf schema:HomeAndConstructionBusiness .

schema:GeoCircle a rdfs:Class ;
    rdfs:label "GeoCircle" ;
    rdfs:comment """A GeoCircle is a GeoShape representing a circular geographic area. As it is a GeoShape
          it provides the simple textual property 'circle', but also allows the combination of postalCode alongside geoRadius.
          The center of the circle can be indicated via the 'geoMidpoint' property, or more approximately using 'address', 'postalCode'.""" ;
    rdfs:subClassOf schema:GeoShape .

schema:GeoCoordinates a rdfs:Class ;
    rdfs:label "GeoCoordinates" ;
    rdfs:comment "The geographic coordinates of a place or event." ;
    rdfs:subClassOf schema:StructuredValue .

schema:GeoShape a rdfs:Class ;
    rdfs:label "GeoShape" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews> ;
    rdfs:comment "The geographic shape of a place. A GeoShape can be described using several properties whose values are based on latitude/longitude pairs. Either whitespace or commas can be used to separate latitude and longitude; whitespace should be used when writing a list of several such points." ;
    rdfs:subClassOf schema:StructuredValue .

schema:GiveAction a rdfs:Class ;
    rdfs:label "GiveAction" ;
    rdfs:comment """The act of transferring ownership of an object to a destination. Reciprocal of TakeAction.<br/><br/>

Related actions:<br/><br/>

<ul>
<li><a class="localLink" href="http://schema.org/TakeAction">TakeAction</a>: Reciprocal of GiveAction.</li>
<li><a class="localLink" href="http://schema.org/SendAction">SendAction</a>: Unlike SendAction, GiveAction implies that ownership is being transferred (e.g. I may send my laptop to you, but that doesn't mean I'm giving it to you).</li>
</ul>
""" ;
    rdfs:subClassOf schema:TransferAction .

schema:GolfCourse a rdfs:Class ;
    rdfs:label "GolfCourse" ;
    rdfs:comment "A golf course." ;
    rdfs:subClassOf schema:SportsActivityLocation .

schema:GovernmentBuilding a rdfs:Class ;
    rdfs:label "GovernmentBuilding" ;
    rdfs:comment "A government building." ;
    rdfs:subClassOf schema:CivicStructure .

schema:GovernmentOffice a rdfs:Class ;
    rdfs:label "GovernmentOffice" ;
    rdfs:comment "A government office&#x2014;for example, an IRS or DMV office." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:GovernmentOrganization a rdfs:Class ;
    rdfs:label "GovernmentOrganization" ;
    rdfs:comment "A governmental organization or agency." ;
    rdfs:subClassOf schema:Organization .

schema:GovernmentPermit a rdfs:Class ;
    rdfs:label "GovernmentPermit" ;
    rdfs:comment "A permit issued by a government agency." ;
    rdfs:subClassOf schema:Permit .

schema:GovernmentService a rdfs:Class ;
    rdfs:label "GovernmentService" ;
    rdfs:comment "A service provided by a government organization, e.g. food stamps, veterans benefits, etc." ;
    rdfs:subClassOf schema:Service .

schema:GroceryStore a rdfs:Class ;
    rdfs:label "GroceryStore" ;
    rdfs:comment "A grocery store." ;
    rdfs:subClassOf schema:Store .

schema:HVACBusiness a rdfs:Class ;
    rdfs:label "HVACBusiness" ;
    rdfs:comment "A business that provide Heating, Ventilation and Air Conditioning services." ;
    rdfs:subClassOf schema:HomeAndConstructionBusiness .

schema:HairSalon a rdfs:Class ;
    rdfs:label "HairSalon" ;
    rdfs:comment "A hair salon." ;
    rdfs:subClassOf schema:HealthAndBeautyBusiness .

schema:HardwareStore a rdfs:Class ;
    rdfs:label "HardwareStore" ;
    rdfs:comment "A hardware store." ;
    rdfs:subClassOf schema:Store .

schema:HealthAndBeautyBusiness a rdfs:Class ;
    rdfs:label "HealthAndBeautyBusiness" ;
    rdfs:comment "Health and beauty." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:HealthClub a rdfs:Class ;
    rdfs:label "HealthClub" ;
    rdfs:comment "A health club." ;
    rdfs:subClassOf schema:HealthAndBeautyBusiness,
        schema:SportsActivityLocation .

schema:HighSchool a rdfs:Class ;
    rdfs:label "HighSchool" ;
    rdfs:comment "A high school." ;
    rdfs:subClassOf schema:EducationalOrganization .

schema:HinduTemple a rdfs:Class ;
    rdfs:label "HinduTemple" ;
    rdfs:comment "A Hindu temple." ;
    rdfs:subClassOf schema:PlaceOfWorship .

schema:HobbyShop a rdfs:Class ;
    rdfs:label "HobbyShop" ;
    rdfs:comment "A store that sells materials useful or necessary for various hobbies." ;
    rdfs:subClassOf schema:Store .

schema:HomeAndConstructionBusiness a rdfs:Class ;
    rdfs:label "HomeAndConstructionBusiness" ;
    rdfs:comment """A construction business.<br/><br/>

A HomeAndConstructionBusiness is a <a class="localLink" href="http://schema.org/LocalBusiness">LocalBusiness</a> that provides services around homes and buildings.<br/><br/>

As a <a class="localLink" href="http://schema.org/LocalBusiness">LocalBusiness</a> it can be described as a <a class="localLink" href="http://schema.org/provider">provider</a> of one or more <a class="localLink" href="http://schema.org/Service">Service</a>(s).""" ;
    rdfs:subClassOf schema:LocalBusiness .

schema:HomeGoodsStore a rdfs:Class ;
    rdfs:label "HomeGoodsStore" ;
    rdfs:comment "A home goods store." ;
    rdfs:subClassOf schema:Store .

schema:Hospital a rdfs:Class ;
    rdfs:label "Hospital" ;
    rdfs:comment "A hospital." ;
    rdfs:subClassOf schema:CivicStructure,
        schema:EmergencyService,
        schema:MedicalOrganization .

schema:Hostel a rdfs:Class ;
    rdfs:label "Hostel" ;
    rdfs:comment """A hostel - cheap accommodation, often in shared dormitories.
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.""" ;
    rdfs:subClassOf schema:LodgingBusiness .

schema:Hotel a rdfs:Class ;
    rdfs:label "Hotel" ;
    dct:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> ;
    rdfs:comment """A hotel is an establishment that provides lodging paid on a short-term basis (Source: Wikipedia, the free encyclopedia, see http://en.wikipedia.org/wiki/Hotel).
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.""" ;
    rdfs:subClassOf schema:LodgingBusiness .

schema:HotelRoom a rdfs:Class ;
    rdfs:label "HotelRoom" ;
    dct:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> ;
    rdfs:comment """A hotel room is a single room in a hotel.
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.""" ;
    rdfs:subClassOf schema:Room .

schema:House a rdfs:Class ;
    rdfs:label "House" ;
    dct:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> ;
    rdfs:comment "A house is a building or structure that has the ability to be occupied for habitation by humans or other creatures (Source: Wikipedia, the free encyclopedia, see <a href=\"http://en.wikipedia.org/wiki/House\">http://en.wikipedia.org/wiki/House</a>)." ;
    rdfs:subClassOf schema:Accommodation .

schema:HousePainter a rdfs:Class ;
    rdfs:label "HousePainter" ;
    rdfs:comment "A house painting service." ;
    rdfs:subClassOf schema:HomeAndConstructionBusiness .

schema:HowTo a rdfs:Class ;
    rdfs:label "HowTo" ;
    rdfs:comment "Instructions that explain how to achieve a result by performing a sequence of steps." ;
    rdfs:subClassOf schema:CreativeWork .

schema:HowToDirection a rdfs:Class ;
    rdfs:label "HowToDirection" ;
    rdfs:comment "A direction indicating a single action to do in the instructions for how to achieve a result." ;
    rdfs:subClassOf schema:CreativeWork,
        schema:ListItem .

schema:HowToItem a rdfs:Class ;
    rdfs:label "HowToItem" ;
    rdfs:comment "An item used as either a tool or supply when performing the instructions for how to to achieve a result." ;
    rdfs:subClassOf schema:ListItem .

schema:HowToSection a rdfs:Class ;
    rdfs:label "HowToSection" ;
    rdfs:comment "A sub-grouping of steps in the instructions for how to achieve a result (e.g. steps for making a pie crust within a pie recipe)." ;
    rdfs:subClassOf schema:CreativeWork,
        schema:ItemList,
        schema:ListItem .

schema:HowToStep a rdfs:Class ;
    rdfs:label "HowToStep" ;
    rdfs:comment "A step in the instructions for how to achieve a result. It is an ordered list with HowToDirection and/or HowToTip items." ;
    rdfs:subClassOf schema:CreativeWork,
        schema:ItemList,
        schema:ListItem .

schema:HowToSupply a rdfs:Class ;
    rdfs:label "HowToSupply" ;
    rdfs:comment "A supply consumed when performing the instructions for how to achieve a result." ;
    rdfs:subClassOf schema:HowToItem .

schema:HowToTip a rdfs:Class ;
    rdfs:label "HowToTip" ;
    rdfs:comment "An explanation in the instructions for how to achieve a result. It provides supplementary information about a technique, supply, author's preference, etc. It can explain what could be done, or what should not be done, but doesn't specify what should be done (see HowToDirection)." ;
    rdfs:subClassOf schema:CreativeWork,
        schema:ListItem .

schema:HowToTool a rdfs:Class ;
    rdfs:label "HowToTool" ;
    rdfs:comment "A tool used (but not consumed) when performing instructions for how to achieve a result." ;
    rdfs:subClassOf schema:HowToItem .

schema:IceCreamShop a rdfs:Class ;
    rdfs:label "IceCreamShop" ;
    rdfs:comment "An ice cream shop." ;
    rdfs:subClassOf schema:FoodEstablishment .

schema:IgnoreAction a rdfs:Class ;
    rdfs:label "IgnoreAction" ;
    rdfs:comment "The act of intentionally disregarding the object. An agent ignores an object." ;
    rdfs:subClassOf schema:AssessAction .

schema:ImageGallery a rdfs:Class ;
    rdfs:label "ImageGallery" ;
    rdfs:comment "Web page type: Image gallery page." ;
    rdfs:subClassOf schema:CollectionPage .

schema:ImageObject a rdfs:Class ;
    rdfs:label "ImageObject" ;
    rdfs:comment "An image file." ;
    rdfs:subClassOf schema:MediaObject ;
    owl:equivalentClass dctype:Image .

schema:IndividualProduct a rdfs:Class ;
    rdfs:label "IndividualProduct" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> ;
    rdfs:comment "A single, identifiable product instance (e.g. a laptop with a particular serial number)." ;
    rdfs:subClassOf schema:Product .

schema:InformAction a rdfs:Class ;
    rdfs:label "InformAction" ;
    rdfs:comment "The act of notifying someone of information pertinent to them, with no expectation of a response." ;
    rdfs:subClassOf schema:CommunicateAction .

schema:InsertAction a rdfs:Class ;
    rdfs:label "InsertAction" ;
    rdfs:comment "The act of adding at a specific location in an ordered collection." ;
    rdfs:subClassOf schema:AddAction .

schema:InstallAction a rdfs:Class ;
    rdfs:label "InstallAction" ;
    rdfs:comment "The act of installing an application." ;
    rdfs:subClassOf schema:ConsumeAction .

schema:InsuranceAgency a rdfs:Class ;
    rdfs:label "InsuranceAgency" ;
    rdfs:comment "An Insurance agency." ;
    rdfs:subClassOf schema:FinancialService .

schema:Intangible a rdfs:Class ;
    rdfs:label "Intangible" ;
    rdfs:comment "A utility class that serves as the umbrella for a number of 'intangible' things such as quantities, structured values, etc." ;
    rdfs:subClassOf schema:Thing .

schema:Integer a rdfs:Class, schema:DataType ;
    rdfs:label "Integer" ;
    rdfs:comment "Data type: Integer." ;
    rdfs:subClassOf schema:Number .

schema:InteractAction a rdfs:Class ;
    rdfs:label "InteractAction" ;
    rdfs:comment "The act of interacting with another person or organization." ;
    rdfs:subClassOf schema:Action .

schema:InteractionCounter a rdfs:Class ;
    rdfs:label "InteractionCounter" ;
    rdfs:comment "A summary of how users have interacted with this CreativeWork. In most cases, authors will use a subtype to specify the specific type of interaction." ;
    rdfs:subClassOf schema:StructuredValue .

schema:InternetCafe a rdfs:Class ;
    rdfs:label "InternetCafe" ;
    rdfs:comment "An internet cafe." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:InvestmentOrDeposit a rdfs:Class ;
    rdfs:label "InvestmentOrDeposit" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO> ;
    rdfs:comment "A type of financial product that typically requires the client to transfer funds to a financial service in return for potential beneficial financial return." ;
    rdfs:subClassOf schema:FinancialProduct .

schema:InviteAction a rdfs:Class ;
    rdfs:label "InviteAction" ;
    rdfs:comment "The act of asking someone to attend an event. Reciprocal of RsvpAction." ;
    rdfs:subClassOf schema:CommunicateAction .

schema:Invoice a rdfs:Class ;
    rdfs:label "Invoice" ;
    rdfs:comment "A statement of the money due for goods or services; a bill." ;
    rdfs:subClassOf schema:Intangible .

schema:ItemAvailability a rdfs:Class ;
    rdfs:label "ItemAvailability" ;
    rdfs:comment "A list of possible product availability options." ;
    rdfs:subClassOf schema:Enumeration .

schema:ItemList a rdfs:Class ;
    rdfs:label "ItemList" ;
    rdfs:comment "A list of items of any sort&#x2014;for example, Top 10 Movies About Weathermen, or Top 100 Party Songs. Not to be confused with HTML lists, which are often used only for formatting." ;
    rdfs:subClassOf schema:Intangible .

schema:ItemListOrderType a rdfs:Class ;
    rdfs:label "ItemListOrderType" ;
    rdfs:comment "Enumerated for values for itemListOrder for indicating how an ordered ItemList is organized." ;
    rdfs:subClassOf schema:Enumeration .

schema:ItemPage a rdfs:Class ;
    rdfs:label "ItemPage" ;
    rdfs:comment "A page devoted to a single item, such as a particular product or hotel." ;
    rdfs:subClassOf schema:WebPage .

schema:JewelryStore a rdfs:Class ;
    rdfs:label "JewelryStore" ;
    rdfs:comment "A jewelry store." ;
    rdfs:subClassOf schema:Store .

schema:JobPosting a rdfs:Class ;
    rdfs:label "JobPosting" ;
    rdfs:comment "A listing that describes a job opening in a certain organization." ;
    rdfs:subClassOf schema:Intangible .

schema:JoinAction a rdfs:Class ;
    rdfs:label "JoinAction" ;
    rdfs:comment """An agent joins an event/group with participants/friends at a location.<br/><br/>

Related actions:<br/><br/>

<ul>
<li><a class="localLink" href="http://schema.org/RegisterAction">RegisterAction</a>: Unlike RegisterAction, JoinAction refers to joining a group/team of people.</li>
<li><a class="localLink" href="http://schema.org/SubscribeAction">SubscribeAction</a>: Unlike SubscribeAction, JoinAction does not imply that you'll be receiving updates.</li>
<li><a class="localLink" href="http://schema.org/FollowAction">FollowAction</a>: Unlike FollowAction, JoinAction does not imply that you'll be polling for updates.</li>
</ul>
""" ;
    rdfs:subClassOf schema:InteractAction .

schema:LakeBodyOfWater a rdfs:Class ;
    rdfs:label "LakeBodyOfWater" ;
    rdfs:comment "A lake (for example, Lake Pontrachain)." ;
    rdfs:subClassOf schema:BodyOfWater .

schema:Landform a rdfs:Class ;
    rdfs:label "Landform" ;
    rdfs:comment "A landform or physical feature.  Landform elements include mountains, plains, lakes, rivers, seascape and oceanic waterbody interface features such as bays, peninsulas, seas and so forth, including sub-aqueous terrain features such as submersed mountain ranges, volcanoes, and the great ocean basins." ;
    rdfs:subClassOf schema:Place .

schema:LandmarksOrHistoricalBuildings a rdfs:Class ;
    rdfs:label "LandmarksOrHistoricalBuildings" ;
    rdfs:comment "An historical landmark or building." ;
    rdfs:subClassOf schema:Place .

schema:Language a rdfs:Class ;
    rdfs:label "Language" ;
    rdfs:comment "Natural languages such as Spanish, Tamil, Hindi, English, etc. Formal language code tags expressed in <a href=\"https://en.wikipedia.org/wiki/IETF_language_tag\">BCP 47</a> can be used via the <a class=\"localLink\" href=\"http://schema.org/alternateName\">alternateName</a> property. The Language type previously also covered programming languages such as Scheme and Lisp, which are now best represented using <a class=\"localLink\" href=\"http://schema.org/ComputerLanguage\">ComputerLanguage</a>." ;
    rdfs:subClassOf schema:Intangible .

schema:LeaveAction a rdfs:Class ;
    rdfs:label "LeaveAction" ;
    rdfs:comment """An agent leaves an event / group with participants/friends at a location.<br/><br/>

Related actions:<br/><br/>

<ul>
<li><a class="localLink" href="http://schema.org/JoinAction">JoinAction</a>: The antonym of LeaveAction.</li>
<li><a class="localLink" href="http://schema.org/UnRegisterAction">UnRegisterAction</a>: Unlike UnRegisterAction, LeaveAction implies leaving a group/team of people rather than a service.</li>
</ul>
""" ;
    rdfs:subClassOf schema:InteractAction .

schema:LegalService a rdfs:Class ;
    rdfs:label "LegalService" ;
    rdfs:comment """A LegalService is a business that provides legally-oriented services, advice and representation, e.g. law firms.<br/><br/>

As a <a class="localLink" href="http://schema.org/LocalBusiness">LocalBusiness</a> it can be described as a <a class="localLink" href="http://schema.org/provider">provider</a> of one or more <a class="localLink" href="http://schema.org/Service">Service</a>(s).""" ;
    rdfs:subClassOf schema:LocalBusiness .

schema:LegislativeBuilding a rdfs:Class ;
    rdfs:label "LegislativeBuilding" ;
    rdfs:comment "A legislative building&#x2014;for example, the state capitol." ;
    rdfs:subClassOf schema:GovernmentBuilding .

schema:LendAction a rdfs:Class ;
    rdfs:label "LendAction" ;
    rdfs:comment """The act of providing an object under an agreement that it will be returned at a later date. Reciprocal of BorrowAction.<br/><br/>

Related actions:<br/><br/>

<ul>
<li><a class="localLink" href="http://schema.org/BorrowAction">BorrowAction</a>: Reciprocal of LendAction.</li>
</ul>
""" ;
    rdfs:subClassOf schema:TransferAction .

schema:Library a rdfs:Class ;
    rdfs:label "Library" ;
    rdfs:comment "A library." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:LikeAction a rdfs:Class ;
    rdfs:label "LikeAction" ;
    rdfs:comment "The act of expressing a positive sentiment about the object. An agent likes an object (a proposition, topic or theme) with participants." ;
    rdfs:subClassOf schema:ReactAction .

schema:LiquorStore a rdfs:Class ;
    rdfs:label "LiquorStore" ;
    rdfs:comment "A shop that sells alcoholic drinks such as wine, beer, whisky and other spirits." ;
    rdfs:subClassOf schema:Store .

schema:ListItem a rdfs:Class ;
    rdfs:label "ListItem" ;
    rdfs:comment "An list item, e.g. a step in a checklist or how-to description." ;
    rdfs:subClassOf schema:Intangible .

schema:ListenAction a rdfs:Class ;
    rdfs:label "ListenAction" ;
    rdfs:comment "The act of consuming audio content." ;
    rdfs:subClassOf schema:ConsumeAction .

schema:LiteraryEvent a rdfs:Class ;
    rdfs:label "LiteraryEvent" ;
    rdfs:comment "Event type: Literary event." ;
    rdfs:subClassOf schema:Event .

schema:LiveBlogPosting a rdfs:Class ;
    rdfs:label "LiveBlogPosting" ;
    rdfs:comment "A blog post intended to provide a rolling textual coverage of an ongoing event through continuous updates." ;
    rdfs:subClassOf schema:BlogPosting .

schema:LoanOrCredit a rdfs:Class ;
    rdfs:label "LoanOrCredit" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO> ;
    rdfs:comment "A financial product for the loaning of an amount of money under agreed terms and charges." ;
    rdfs:subClassOf schema:FinancialProduct .

schema:LocalBusiness a rdfs:Class ;
    rdfs:label "LocalBusiness" ;
    rdfs:comment "A particular physical business or branch of an organization. Examples of LocalBusiness include a restaurant, a particular branch of a restaurant chain, a branch of a bank, a medical practice, a club, a bowling alley, etc." ;
    rdfs:subClassOf schema:Organization,
        schema:Place ;
    skos:closeMatch <http://www.w3.org/ns/regorg#RegisteredOrganization> .

schema:LocationFeatureSpecification a rdfs:Class ;
    rdfs:label "LocationFeatureSpecification" ;
    dct:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> ;
    rdfs:comment "Specifies a location feature by providing a structured value representing a feature of an accommodation as a property-value pair of varying degrees of formality." ;
    rdfs:subClassOf schema:PropertyValue .

schema:LockerDelivery a rdfs:Class ;
    rdfs:label "LockerDelivery" ;
    rdfs:comment "A DeliveryMethod in which an item is made available via locker." ;
    rdfs:subClassOf schema:DeliveryMethod .

schema:Locksmith a rdfs:Class ;
    rdfs:label "Locksmith" ;
    rdfs:comment "A locksmith." ;
    rdfs:subClassOf schema:HomeAndConstructionBusiness .

schema:LodgingBusiness a rdfs:Class ;
    rdfs:label "LodgingBusiness" ;
    rdfs:comment "A lodging business, such as a motel, hotel, or inn." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:LodgingReservation a rdfs:Class ;
    rdfs:label "LodgingReservation" ;
    rdfs:comment """A reservation for lodging at a hotel, motel, inn, etc.<br/><br/>

Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.""" ;
    rdfs:subClassOf schema:Reservation .

schema:LoseAction a rdfs:Class ;
    rdfs:label "LoseAction" ;
    rdfs:comment "The act of being defeated in a competitive activity." ;
    rdfs:subClassOf schema:AchieveAction .

schema:Map a rdfs:Class ;
    rdfs:label "Map" ;
    rdfs:comment "A map." ;
    rdfs:subClassOf schema:CreativeWork .

schema:MapCategoryType a rdfs:Class ;
    rdfs:label "MapCategoryType" ;
    rdfs:comment "An enumeration of several kinds of Map." ;
    rdfs:subClassOf schema:Enumeration .

schema:MarryAction a rdfs:Class ;
    rdfs:label "MarryAction" ;
    rdfs:comment "The act of marrying a person." ;
    rdfs:subClassOf schema:InteractAction .

schema:Mass a rdfs:Class ;
    rdfs:label "Mass" ;
    rdfs:comment "Properties that take Mass as values are of the form '&lt;Number&gt; &lt;Mass unit of measure&gt;'. E.g., '7 kg'." ;
    rdfs:subClassOf schema:Quantity .

schema:MediaObject a rdfs:Class ;
    rdfs:label "MediaObject" ;
    rdfs:comment "A media object, such as an image, video, or audio object embedded in a web page or a downloadable dataset i.e. DataDownload. Note that a creative work may have many media objects associated with it on the same web page. For example, a page about a single song (MusicRecording) may have a music video (VideoObject), and a high and low bandwidth audio stream (2 AudioObject's)." ;
    rdfs:subClassOf schema:CreativeWork .

schema:MediaSubscription a rdfs:Class ;
    rdfs:label "MediaSubscription" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1741> ;
    schema:category "issue-1741" ;
    rdfs:comment "A subscription which allows a user to access media including audio, video, books, etc." ;
    rdfs:subClassOf schema:Intangible .

schema:MedicalOrganization a rdfs:Class ;
    rdfs:label "MedicalOrganization" ;
    rdfs:comment "A medical organization (physical or not), such as hospital, institution or clinic." ;
    rdfs:subClassOf schema:Organization .

schema:MeetingRoom a rdfs:Class ;
    rdfs:label "MeetingRoom" ;
    dct:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> ;
    rdfs:comment """A meeting room, conference room, or conference hall is a room provided for singular events such as business conferences and meetings (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Conference_hall">http://en.wikipedia.org/wiki/Conference_hall</a>).
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.""" ;
    rdfs:subClassOf schema:Room .

schema:MensClothingStore a rdfs:Class ;
    rdfs:label "MensClothingStore" ;
    rdfs:comment "A men's clothing store." ;
    rdfs:subClassOf schema:Store .

schema:Menu a rdfs:Class ;
    rdfs:label "Menu" ;
    rdfs:comment "A structured representation of food or drink items available from a FoodEstablishment." ;
    rdfs:subClassOf schema:CreativeWork .

schema:MenuItem a rdfs:Class ;
    rdfs:label "MenuItem" ;
    rdfs:comment "A food or drink item listed in a menu or menu section." ;
    rdfs:subClassOf schema:Intangible .

schema:MenuSection a rdfs:Class ;
    rdfs:label "MenuSection" ;
    rdfs:comment "A sub-grouping of food or drink items in a menu. E.g. courses (such as 'Dinner', 'Breakfast', etc.), specific type of dishes (such as 'Meat', 'Vegan', 'Drinks', etc.), or some other classification made by the menu provider." ;
    rdfs:subClassOf schema:CreativeWork .

schema:Message a rdfs:Class ;
    rdfs:label "Message" ;
    rdfs:comment "A single message from a sender to one or more organizations or people." ;
    rdfs:subClassOf schema:CreativeWork .

schema:MiddleSchool a rdfs:Class ;
    rdfs:label "MiddleSchool" ;
    rdfs:comment "A middle school (typically for children aged around 11-14, although this varies somewhat)." ;
    rdfs:subClassOf schema:EducationalOrganization .

schema:MobileApplication a rdfs:Class ;
    rdfs:label "MobileApplication" ;
    rdfs:comment "A software application designed specifically to work well on a mobile device such as a telephone." ;
    rdfs:subClassOf schema:SoftwareApplication .

schema:MobilePhoneStore a rdfs:Class ;
    rdfs:label "MobilePhoneStore" ;
    rdfs:comment "A store that sells mobile phones and related accessories." ;
    rdfs:subClassOf schema:Store .

schema:MonetaryAmount a rdfs:Class ;
    rdfs:label "MonetaryAmount" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO> ;
    rdfs:comment "A monetary value or range. This type can be used to describe an amount of money such as $50 USD, or a range as in describing a bank account being suitable for a balance between £1,000 and £1,000,000 GBP, or the value of a salary, etc. It is recommended to use <a class=\"localLink\" href=\"http://schema.org/PriceSpecification\">PriceSpecification</a> Types to describe the price of an Offer, Invoice, etc." ;
    rdfs:subClassOf schema:StructuredValue .

schema:MonetaryAmountDistribution a rdfs:Class ;
    rdfs:label "MonetaryAmountDistribution" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1698> ;
    schema:category "issue-1698" ;
    rdfs:comment "A statistical distribution of monetary amounts." ;
    rdfs:subClassOf schema:QuantitativeValueDistribution .

schema:Mosque a rdfs:Class ;
    rdfs:label "Mosque" ;
    rdfs:comment "A mosque." ;
    rdfs:subClassOf schema:PlaceOfWorship .

schema:Motel a rdfs:Class ;
    rdfs:label "Motel" ;
    rdfs:comment """A motel.
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.""" ;
    rdfs:subClassOf schema:LodgingBusiness .

schema:MotorcycleDealer a rdfs:Class ;
    rdfs:label "MotorcycleDealer" ;
    rdfs:comment "A motorcycle dealer." ;
    rdfs:subClassOf schema:AutomotiveBusiness .

schema:MotorcycleRepair a rdfs:Class ;
    rdfs:label "MotorcycleRepair" ;
    rdfs:comment "A motorcycle repair shop." ;
    rdfs:subClassOf schema:AutomotiveBusiness .

schema:Mountain a rdfs:Class ;
    rdfs:label "Mountain" ;
    rdfs:comment "A mountain, like Mount Whitney or Mount Everest." ;
    rdfs:subClassOf schema:Landform .

schema:MoveAction a rdfs:Class ;
    rdfs:label "MoveAction" ;
    rdfs:comment """The act of an agent relocating to a place.<br/><br/>

Related actions:<br/><br/>

<ul>
<li><a class="localLink" href="http://schema.org/TransferAction">TransferAction</a>: Unlike TransferAction, the subject of the move is a living Person or Organization rather than an inanimate object.</li>
</ul>
""" ;
    rdfs:subClassOf schema:Action .

schema:Movie a rdfs:Class ;
    rdfs:label "Movie" ;
    rdfs:comment "A movie." ;
    rdfs:subClassOf schema:CreativeWork .

schema:MovieClip a rdfs:Class ;
    rdfs:label "MovieClip" ;
    rdfs:comment "A short segment/part of a movie." ;
    rdfs:subClassOf schema:Clip .

schema:MovieRentalStore a rdfs:Class ;
    rdfs:label "MovieRentalStore" ;
    rdfs:comment "A movie rental store." ;
    rdfs:subClassOf schema:Store .

schema:MovieSeries a rdfs:Class ;
    rdfs:label "MovieSeries" ;
    rdfs:comment "A series of movies. Included movies can be indicated with the hasPart property." ;
    rdfs:subClassOf schema:CreativeWorkSeries .

schema:MovieTheater a rdfs:Class ;
    rdfs:label "MovieTheater" ;
    rdfs:comment "A movie theater." ;
    rdfs:subClassOf schema:CivicStructure,
        schema:EntertainmentBusiness .

schema:MovingCompany a rdfs:Class ;
    rdfs:label "MovingCompany" ;
    rdfs:comment "A moving company." ;
    rdfs:subClassOf schema:HomeAndConstructionBusiness .

schema:Museum a rdfs:Class ;
    rdfs:label "Museum" ;
    rdfs:comment "A museum." ;
    rdfs:subClassOf schema:CivicStructure .

schema:MusicAlbum a rdfs:Class ;
    rdfs:label "MusicAlbum" ;
    rdfs:comment "A collection of music tracks." ;
    rdfs:subClassOf schema:MusicPlaylist .

schema:MusicAlbumProductionType a rdfs:Class ;
    rdfs:label "MusicAlbumProductionType" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    rdfs:comment "Classification of the album by it's type of content: soundtrack, live album, studio album, etc." ;
    rdfs:subClassOf schema:Enumeration .

schema:MusicAlbumReleaseType a rdfs:Class ;
    rdfs:label "MusicAlbumReleaseType" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    rdfs:comment "The kind of release which this album is: single, EP or album." ;
    rdfs:subClassOf schema:Enumeration .

schema:MusicComposition a rdfs:Class ;
    rdfs:label "MusicComposition" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    rdfs:comment "A musical composition." ;
    rdfs:subClassOf schema:CreativeWork .

schema:MusicEvent a rdfs:Class ;
    rdfs:label "MusicEvent" ;
    rdfs:comment "Event type: Music event." ;
    rdfs:subClassOf schema:Event .

schema:MusicGroup a rdfs:Class ;
    rdfs:label "MusicGroup" ;
    rdfs:comment "A musical group, such as a band, an orchestra, or a choir. Can also be a solo musician." ;
    rdfs:subClassOf schema:PerformingGroup .

schema:MusicPlaylist a rdfs:Class ;
    rdfs:label "MusicPlaylist" ;
    rdfs:comment "A collection of music tracks in playlist form." ;
    rdfs:subClassOf schema:CreativeWork .

schema:MusicRecording a rdfs:Class ;
    rdfs:label "MusicRecording" ;
    rdfs:comment "A music recording (track), usually a single song." ;
    rdfs:subClassOf schema:CreativeWork .

schema:MusicRelease a rdfs:Class ;
    rdfs:label "MusicRelease" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    rdfs:comment "A MusicRelease is a specific release of a music album." ;
    rdfs:subClassOf schema:MusicPlaylist .

schema:MusicReleaseFormatType a rdfs:Class ;
    rdfs:label "MusicReleaseFormatType" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    rdfs:comment "Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.)." ;
    rdfs:subClassOf schema:Enumeration .

schema:MusicStore a rdfs:Class ;
    rdfs:label "MusicStore" ;
    rdfs:comment "A music store." ;
    rdfs:subClassOf schema:Store .

schema:MusicVenue a rdfs:Class ;
    rdfs:label "MusicVenue" ;
    rdfs:comment "A music venue." ;
    rdfs:subClassOf schema:CivicStructure .

schema:MusicVideoObject a rdfs:Class ;
    rdfs:label "MusicVideoObject" ;
    rdfs:comment "A music video file." ;
    rdfs:subClassOf schema:MediaObject .

schema:NGO a rdfs:Class ;
    rdfs:label "NGO" ;
    rdfs:comment "Organization: Non-governmental Organization." ;
    rdfs:subClassOf schema:Organization .

schema:NailSalon a rdfs:Class ;
    rdfs:label "NailSalon" ;
    rdfs:comment "A nail salon." ;
    rdfs:subClassOf schema:HealthAndBeautyBusiness .

schema:NewsArticle a rdfs:Class ;
    rdfs:label "NewsArticle" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews>,
        <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP-draws> ;
    rdfs:comment """A NewsArticle is an article whose content reports news, or provides background context and supporting materials for understanding the news.<br/><br/>

A more detailed overview of <a href="/docs/news.html">schema.org News markup</a> is also available.""" ;
    rdfs:subClassOf schema:Article .

schema:NightClub a rdfs:Class ;
    rdfs:label "NightClub" ;
    rdfs:comment "A nightclub or discotheque." ;
    rdfs:subClassOf schema:EntertainmentBusiness .

schema:Notary a rdfs:Class ;
    rdfs:label "Notary" ;
    rdfs:comment "A notary." ;
    rdfs:subClassOf schema:LegalService .

schema:NoteDigitalDocument a rdfs:Class ;
    rdfs:label "NoteDigitalDocument" ;
    rdfs:comment "A file containing a note, primarily for the author." ;
    rdfs:subClassOf schema:DigitalDocument .

schema:Number a schema:DataType,
        rdfs:Class ;
    rdfs:label "Number" ;
    rdfs:comment """Data type: Number.<br/><br/>

Usage guidelines:<br/><br/>

<ul>
<li>Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.</li>
<li>Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.</li>
</ul>
""" .

schema:NutritionInformation a rdfs:Class ;
    rdfs:label "NutritionInformation" ;
    rdfs:comment "Nutritional information about the recipe." ;
    rdfs:subClassOf schema:StructuredValue .

schema:Occupation a rdfs:Class ;
    rdfs:label "Occupation" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1698> ;
    schema:category "issue-1698" ;
    rdfs:comment "A profession, may involve prolonged training and/or a formal qualification." ;
    rdfs:subClassOf schema:Intangible .

schema:OceanBodyOfWater a rdfs:Class ;
    rdfs:label "OceanBodyOfWater" ;
    rdfs:comment "An ocean (for example, the Pacific)." ;
    rdfs:subClassOf schema:BodyOfWater .

schema:Offer a rdfs:Class ;
    rdfs:label "Offer" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    rdfs:comment """An offer to transfer some rights to an item or to provide a service — for example, an offer to sell tickets to an event, to rent the DVD of a movie, to stream a TV show over the internet, to repair a motorcycle, or to loan a book.<br/><br/>

For <a href="http://www.gs1.org/barcodes/technical/idkeys/gtin">GTIN</a>-related fields, see <a href="http://www.gs1.org/barcodes/support/check_digit_calculator">Check Digit calculator</a> and <a href="http://www.gs1us.org/resources/standards/gtin-validation-guide">validation guide</a> from <a href="http://www.gs1.org/">GS1</a>.""" ;
    rdfs:subClassOf schema:Intangible .

schema:OfferCatalog a rdfs:Class ;
    rdfs:label "OfferCatalog" ;
    rdfs:comment "An OfferCatalog is an ItemList that contains related Offers and/or further OfferCatalogs that are offeredBy the same provider." ;
    rdfs:subClassOf schema:ItemList .

schema:OfferItemCondition a rdfs:Class ;
    rdfs:label "OfferItemCondition" ;
    rdfs:comment "A list of possible conditions for the item." ;
    rdfs:subClassOf schema:Enumeration .

schema:OfficeEquipmentStore a rdfs:Class ;
    rdfs:label "OfficeEquipmentStore" ;
    rdfs:comment "An office equipment store." ;
    rdfs:subClassOf schema:Store .

schema:OnDemandEvent a rdfs:Class ;
    rdfs:label "OnDemandEvent" ;
    rdfs:comment "A publication event e.g. catch-up TV or radio podcast, during which a program is available on-demand." ;
    rdfs:subClassOf schema:PublicationEvent .

schema:OpeningHoursSpecification a rdfs:Class ;
    rdfs:label "OpeningHoursSpecification" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> ;
    rdfs:comment """A structured value providing information about the opening hours of a place or a certain service inside a place.<br/><br/>

The place is <strong>open</strong> if the <a class="localLink" href="http://schema.org/opens">opens</a> property is specified, and <strong>closed</strong> otherwise.<br/><br/>

If the value for the <a class="localLink" href="http://schema.org/closes">closes</a> property is less than the value for the <a class="localLink" href="http://schema.org/opens">opens</a> property then the hour range is assumed to span over the next day.""" ;
    rdfs:subClassOf schema:StructuredValue .

schema:Order a rdfs:Class ;
    rdfs:label "Order" ;
    rdfs:comment "An order is a confirmation of a transaction (a receipt), which can contain multiple line items, each represented by an Offer that has been accepted by the customer." ;
    rdfs:subClassOf schema:Intangible .

schema:OrderAction a rdfs:Class ;
    rdfs:label "OrderAction" ;
    rdfs:comment "An agent orders an object/product/service to be delivered/sent." ;
    rdfs:subClassOf schema:TradeAction .

schema:OrderItem a rdfs:Class ;
    rdfs:label "OrderItem" ;
    rdfs:comment "An order item is a line of an order. It includes the quantity and shipping details of a bought offer." ;
    rdfs:subClassOf schema:Intangible .

schema:OrderStatus a rdfs:Class ;
    rdfs:label "OrderStatus" ;
    rdfs:comment "Enumerated status values for Order." ;
    rdfs:subClassOf schema:Enumeration .

schema:Organization a rdfs:Class ;
    rdfs:label "Organization" ;
    rdfs:comment "An organization such as a school, NGO, corporation, club, etc." ;
    rdfs:subClassOf schema:Thing .

schema:OrganizationRole a rdfs:Class ;
    rdfs:label "OrganizationRole" ;
    rdfs:comment "A subclass of Role used to describe roles within organizations." ;
    rdfs:subClassOf schema:Role .

schema:OrganizeAction a rdfs:Class ;
    rdfs:label "OrganizeAction" ;
    rdfs:comment "The act of manipulating/administering/supervising/controlling one or more objects." ;
    rdfs:subClassOf schema:Action .

schema:OutletStore a rdfs:Class ;
    rdfs:label "OutletStore" ;
    rdfs:comment "An outlet store." ;
    rdfs:subClassOf schema:Store .

schema:OwnershipInfo a rdfs:Class ;
    rdfs:label "OwnershipInfo" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> ;
    rdfs:comment "A structured value providing information about when a certain organization or person owned a certain product." ;
    rdfs:subClassOf schema:StructuredValue .

schema:PaintAction a rdfs:Class ;
    rdfs:label "PaintAction" ;
    rdfs:comment "The act of producing a painting, typically with paint and canvas as instruments." ;
    rdfs:subClassOf schema:CreateAction .

schema:Painting a rdfs:Class ;
    rdfs:label "Painting" ;
    rdfs:comment "A painting." ;
    rdfs:subClassOf schema:CreativeWork .

schema:ParcelDelivery a rdfs:Class ;
    rdfs:label "ParcelDelivery" ;
    rdfs:comment "The delivery of a parcel either via the postal service or a commercial service." ;
    rdfs:subClassOf schema:Intangible .

schema:ParcelService a rdfs:Class ;
    rdfs:label "ParcelService" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> ;
    rdfs:comment """A private parcel service as the delivery mode available for a certain offer.<br/><br/>

Commonly used values:<br/><br/>

<ul>
<li>http://purl.org/goodrelations/v1#DHL</li>
<li>http://purl.org/goodrelations/v1#FederalExpress</li>
<li>http://purl.org/goodrelations/v1#UPS</li>
</ul>
""" ;
    rdfs:subClassOf schema:DeliveryMethod .

schema:ParentAudience a rdfs:Class ;
    rdfs:label "ParentAudience" ;
    rdfs:comment "A set of characteristics describing parents, who can be interested in viewing some content." ;
    rdfs:subClassOf schema:PeopleAudience .

schema:Park a rdfs:Class ;
    rdfs:label "Park" ;
    rdfs:comment "A park." ;
    rdfs:subClassOf schema:CivicStructure .

schema:ParkingFacility a rdfs:Class ;
    rdfs:label "ParkingFacility" ;
    rdfs:comment "A parking lot or other parking facility." ;
    rdfs:subClassOf schema:CivicStructure .

schema:PawnShop a rdfs:Class ;
    rdfs:label "PawnShop" ;
    rdfs:comment "A shop that will buy, or lend money against the security of, personal possessions." ;
    rdfs:subClassOf schema:Store .

schema:PayAction a rdfs:Class ;
    rdfs:label "PayAction" ;
    rdfs:comment "An agent pays a price to a participant." ;
    rdfs:subClassOf schema:TradeAction .

schema:PaymentCard a rdfs:Class ;
    rdfs:label "PaymentCard" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO> ;
    rdfs:comment "A payment method using a credit, debit, store or other card to associate the payment with an account." ;
    rdfs:subClassOf schema:FinancialProduct,
        schema:PaymentMethod .

schema:PaymentChargeSpecification a rdfs:Class ;
    rdfs:label "PaymentChargeSpecification" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> ;
    rdfs:comment "The costs of settling the payment using a particular payment method." ;
    rdfs:subClassOf schema:PriceSpecification .

schema:PaymentMethod a rdfs:Class ;
    rdfs:label "PaymentMethod" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> ;
    rdfs:comment """A payment method is a standardized procedure for transferring the monetary amount for a purchase. Payment methods are characterized by the legal and technical structures used, and by the organization or group carrying out the transaction.<br/><br/>

Commonly used values:<br/><br/>

<ul>
<li>http://purl.org/goodrelations/v1#ByBankTransferInAdvance</li>
<li>http://purl.org/goodrelations/v1#ByInvoice</li>
<li>http://purl.org/goodrelations/v1#Cash</li>
<li>http://purl.org/goodrelations/v1#CheckInAdvance</li>
<li>http://purl.org/goodrelations/v1#COD</li>
<li>http://purl.org/goodrelations/v1#DirectDebit</li>
<li>http://purl.org/goodrelations/v1#GoogleCheckout</li>
<li>http://purl.org/goodrelations/v1#PayPal</li>
<li>http://purl.org/goodrelations/v1#PaySwarm</li>
</ul>
""" ;
    rdfs:subClassOf schema:Enumeration .

schema:PaymentService a rdfs:Class ;
    rdfs:label "PaymentService" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO> ;
    rdfs:comment "A Service to transfer funds from a person or organization to a beneficiary person or organization." ;
    rdfs:subClassOf schema:FinancialProduct .

schema:PaymentStatusType a rdfs:Class ;
    rdfs:label "PaymentStatusType" ;
    rdfs:comment "A specific payment status. For example, PaymentDue, PaymentComplete, etc." ;
    rdfs:subClassOf schema:Enumeration .

schema:PeopleAudience a rdfs:Class ;
    rdfs:label "PeopleAudience" ;
    rdfs:comment "A set of characteristics belonging to people, e.g. who compose an item's target audience." ;
    rdfs:subClassOf schema:Audience .

schema:PerformAction a rdfs:Class ;
    rdfs:label "PerformAction" ;
    rdfs:comment "The act of participating in performance arts." ;
    rdfs:subClassOf schema:PlayAction .

schema:PerformanceRole a rdfs:Class ;
    rdfs:label "PerformanceRole" ;
    rdfs:comment "A PerformanceRole is a Role that some entity places with regard to a theatrical performance, e.g. in a Movie, TVSeries etc." ;
    rdfs:subClassOf schema:Role .

schema:PerformingArtsTheater a rdfs:Class ;
    rdfs:label "PerformingArtsTheater" ;
    rdfs:comment "A theater or other performing art center." ;
    rdfs:subClassOf schema:CivicStructure .

schema:PerformingGroup a rdfs:Class ;
    rdfs:label "PerformingGroup" ;
    rdfs:comment "A performance group, such as a band, an orchestra, or a circus." ;
    rdfs:subClassOf schema:Organization .

schema:Periodical a rdfs:Class ;
    rdfs:label "Periodical" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex> ;
    rdfs:comment """A publication in any medium issued in successive parts bearing numerical or chronological designations and intended, such as a magazine, scholarly journal, or newspaper to continue indefinitely.<br/><br/>

See also <a href="http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html">blog post</a>.""" ;
    rdfs:subClassOf schema:CreativeWorkSeries ;
    owl:equivalentClass bibo:Periodical .

schema:Permit a rdfs:Class ;
    rdfs:label "Permit" ;
    rdfs:comment "A permit issued by an organization, e.g. a parking pass." ;
    rdfs:subClassOf schema:Intangible .

schema:Person a rdfs:Class ;
    rdfs:label "Person" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews> ;
    rdfs:comment "A person (alive, dead, undead, or fictional)." ;
    rdfs:subClassOf schema:Thing ;
    owl:equivalentClass foaf:Person .

schema:PetStore a rdfs:Class ;
    rdfs:label "PetStore" ;
    rdfs:comment "A pet store." ;
    rdfs:subClassOf schema:Store .

schema:Pharmacy a rdfs:Class ;
    rdfs:label "Pharmacy" ;
    rdfs:comment "A pharmacy or drugstore." ;
    rdfs:subClassOf schema:MedicalBusiness,
        schema:MedicalOrganization .

schema:Photograph a rdfs:Class ;
    rdfs:label "Photograph" ;
    rdfs:comment "A photograph." ;
    rdfs:subClassOf schema:CreativeWork .

schema:PhotographAction a rdfs:Class ;
    rdfs:label "PhotographAction" ;
    rdfs:comment "The act of capturing still images of objects using a camera." ;
    rdfs:subClassOf schema:CreateAction .

schema:Physician a rdfs:Class ;
    rdfs:label "Physician" ;
    rdfs:comment "A doctor's office." ;
    rdfs:subClassOf schema:MedicalBusiness,
        schema:MedicalOrganization .

schema:Place a rdfs:Class ;
    rdfs:label "Place" ;
    rdfs:comment "Entities that have a somewhat fixed, physical extension." ;
    rdfs:subClassOf schema:Thing .

schema:PlaceOfWorship a rdfs:Class ;
    rdfs:label "PlaceOfWorship" ;
    rdfs:comment "Place of worship, such as a church, synagogue, or mosque." ;
    rdfs:subClassOf schema:CivicStructure .

schema:PlanAction a rdfs:Class ;
    rdfs:label "PlanAction" ;
    rdfs:comment "The act of planning the execution of an event/task/action/reservation/plan to a future date." ;
    rdfs:subClassOf schema:OrganizeAction .

schema:PlayAction a rdfs:Class ;
    rdfs:label "PlayAction" ;
    rdfs:comment """The act of playing/exercising/training/performing for enjoyment, leisure, recreation, Competition or exercise.<br/><br/>

Related actions:<br/><br/>

<ul>
<li><a class="localLink" href="http://schema.org/ListenAction">ListenAction</a>: Unlike ListenAction (which is under ConsumeAction), PlayAction refers to performing for an audience or at an event, rather than consuming music.</li>
<li><a class="localLink" href="http://schema.org/WatchAction">WatchAction</a>: Unlike WatchAction (which is under ConsumeAction), PlayAction refers to showing/displaying for an audience or at an event, rather than consuming visual content.</li>
</ul>
""" ;
    rdfs:subClassOf schema:Action .

schema:Playground a rdfs:Class ;
    rdfs:label "Playground" ;
    rdfs:comment "A playground." ;
    rdfs:subClassOf schema:CivicStructure .

schema:Plumber a rdfs:Class ;
    rdfs:label "Plumber" ;
    rdfs:comment "A plumbing service." ;
    rdfs:subClassOf schema:HomeAndConstructionBusiness .

schema:PoliceStation a rdfs:Class ;
    rdfs:label "PoliceStation" ;
    rdfs:comment "A police station." ;
    rdfs:subClassOf schema:CivicStructure,
        schema:EmergencyService .

schema:Pond a rdfs:Class ;
    rdfs:label "Pond" ;
    rdfs:comment "A pond." ;
    rdfs:subClassOf schema:BodyOfWater .

schema:PostOffice a rdfs:Class ;
    rdfs:label "PostOffice" ;
    rdfs:comment "A post office." ;
    rdfs:subClassOf schema:GovernmentOffice .

schema:PostalAddress a rdfs:Class ;
    rdfs:label "PostalAddress" ;
    rdfs:comment "The mailing address." ;
    rdfs:subClassOf schema:ContactPoint .

schema:PreOrderAction a rdfs:Class ;
    rdfs:label "PreOrderAction" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1125> ;
    schema:category "issue-1125" ;
    rdfs:comment "An agent orders a (not yet released) object/product/service to be delivered/sent." ;
    rdfs:subClassOf schema:TradeAction .

schema:PrependAction a rdfs:Class ;
    rdfs:label "PrependAction" ;
    rdfs:comment "The act of inserting at the beginning if an ordered collection." ;
    rdfs:subClassOf schema:InsertAction .

schema:Preschool a rdfs:Class ;
    rdfs:label "Preschool" ;
    rdfs:comment "A preschool." ;
    rdfs:subClassOf schema:EducationalOrganization .

schema:PresentationDigitalDocument a rdfs:Class ;
    rdfs:label "PresentationDigitalDocument" ;
    rdfs:comment "A file containing slides or used for a presentation." ;
    rdfs:subClassOf schema:DigitalDocument .

schema:PriceSpecification a rdfs:Class ;
    rdfs:label "PriceSpecification" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> ;
    rdfs:comment "A structured value representing a price or price range. Typically, only the subclasses of this type are used for markup. It is recommended to use <a class=\"localLink\" href=\"http://schema.org/MonetaryAmount\">MonetaryAmount</a> to describe independent amounts of money such as a salary, credit card limits, etc." ;
    rdfs:subClassOf schema:StructuredValue .

schema:Product a rdfs:Class ;
    rdfs:label "Product" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    rdfs:comment "Any offered product or service. For example: a pair of shoes; a concert ticket; the rental of a car; a haircut; or an episode of a TV show streamed online." ;
    rdfs:subClassOf schema:Thing .

schema:ProductModel a rdfs:Class ;
    rdfs:label "ProductModel" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> ;
    rdfs:comment "A datasheet or vendor specification of a product (in the sense of a prototypical description)." ;
    rdfs:subClassOf schema:Product .

schema:ProfessionalService a rdfs:Class ;
    rdfs:label "ProfessionalService" ;
    rdfs:comment """Original definition: "provider of professional services."<br/><br/>

The general <a class="localLink" href="http://schema.org/ProfessionalService">ProfessionalService</a> type for local businesses was deprecated due to confusion with <a class="localLink" href="http://schema.org/Service">Service</a>. For reference, the types that it included were: <a class="localLink" href="http://schema.org/Dentist">Dentist</a>,
        <a class="localLink" href="http://schema.org/AccountingService">AccountingService</a>, <a class="localLink" href="http://schema.org/Attorney">Attorney</a>, <a class="localLink" href="http://schema.org/Notary">Notary</a>, as well as types for several kinds of <a class="localLink" href="http://schema.org/HomeAndConstructionBusiness">HomeAndConstructionBusiness</a>: <a class="localLink" href="http://schema.org/Electrician">Electrician</a>, <a class="localLink" href="http://schema.org/GeneralContractor">GeneralContractor</a>,
        <a class="localLink" href="http://schema.org/HousePainter">HousePainter</a>, <a class="localLink" href="http://schema.org/Locksmith">Locksmith</a>, <a class="localLink" href="http://schema.org/Plumber">Plumber</a>, <a class="localLink" href="http://schema.org/RoofingContractor">RoofingContractor</a>. <a class="localLink" href="http://schema.org/LegalService">LegalService</a> was introduced as a more inclusive supertype of <a class="localLink" href="http://schema.org/Attorney">Attorney</a>.""" ;
    rdfs:subClassOf schema:LocalBusiness .

schema:ProfilePage a rdfs:Class ;
    rdfs:label "ProfilePage" ;
    rdfs:comment "Web page type: Profile page." ;
    rdfs:subClassOf schema:WebPage .

schema:ProgramMembership a rdfs:Class ;
    rdfs:label "ProgramMembership" ;
    rdfs:comment "Used to describe membership in a loyalty programs (e.g. \"StarAliance\"), traveler clubs (e.g. \"AAA\"), purchase clubs (\"Safeway Club\"), etc." ;
    rdfs:subClassOf schema:Intangible .

schema:PropertyValue a rdfs:Class ;
    rdfs:label "PropertyValue" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> ;
    rdfs:comment """A property-value pair, e.g. representing a feature of a product or place. Use the 'name' property for the name of the property. If there is an additional human-readable version of the value, put that into the 'description' property.<br/><br/>

Always use specific schema.org properties when a) they exist and b) you can populate them. Using PropertyValue as a substitute will typically not trigger the same effect as using the original, specific property.""" ;
    rdfs:subClassOf schema:StructuredValue .

schema:PropertyValueSpecification a rdfs:Class ;
    rdfs:label "PropertyValueSpecification" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_ActionCollabClass> ;
    rdfs:comment "A Property value specification." ;
    rdfs:subClassOf schema:Intangible .

schema:PublicSwimmingPool a rdfs:Class ;
    rdfs:label "PublicSwimmingPool" ;
    rdfs:comment "A public swimming pool." ;
    rdfs:subClassOf schema:SportsActivityLocation .

schema:PublicationEvent a rdfs:Class ;
    rdfs:label "PublicationEvent" ;
    rdfs:comment "A PublicationEvent corresponds indifferently to the event of publication for a CreativeWork of any type e.g. a broadcast event, an on-demand event, a book/journal publication via a variety of delivery media." ;
    rdfs:subClassOf schema:Event .

schema:PublicationIssue a rdfs:Class ;
    rdfs:label "PublicationIssue" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex> ;
    rdfs:comment """A part of a successively published publication such as a periodical or publication volume, often numbered, usually containing a grouping of works such as articles.<br/><br/>

See also <a href="http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html">blog post</a>.""" ;
    rdfs:subClassOf schema:CreativeWork ;
    owl:equivalentClass bibo:Issue .

schema:PublicationVolume a rdfs:Class ;
    rdfs:label "PublicationVolume" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex> ;
    rdfs:comment """A part of a successively published publication such as a periodical or multi-volume work, often numbered. It may represent a time span, such as a year.<br/><br/>

See also <a href="http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html">blog post</a>.""" ;
    rdfs:subClassOf schema:CreativeWork .

schema:QAPage a rdfs:Class ;
    rdfs:label "QAPage" ;
    rdfs:comment "A QAPage is a WebPage focussed on a specific Question and its Answer(s), e.g. in a question answering site or documenting Frequently Asked Questions (FAQs)." ;
    rdfs:subClassOf schema:WebPage .

schema:QualitativeValue a rdfs:Class ;
    rdfs:label "QualitativeValue" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> ;
    rdfs:comment "A predefined value for a product characteristic, e.g. the power cord plug type 'US' or the garment sizes 'S', 'M', 'L', and 'XL'." ;
    rdfs:subClassOf schema:Enumeration .

schema:QuantitativeValue a rdfs:Class ;
    rdfs:label "QuantitativeValue" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> ;
    rdfs:comment "A point value or interval for product characteristics and other purposes." ;
    rdfs:subClassOf schema:StructuredValue .

schema:QuantitativeValueDistribution a rdfs:Class ;
    rdfs:label "QuantitativeValueDistribution" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1698> ;
    schema:category "issue-1698" ;
    rdfs:comment "A statistical distribution of values." ;
    rdfs:subClassOf schema:StructuredValue .

schema:Quantity a rdfs:Class ;
    rdfs:label "Quantity" ;
    rdfs:comment "Quantities such as distance, time, mass, weight, etc. Particular instances of say Mass are entities like '3 Kg' or '4 milligrams'." ;
    rdfs:subClassOf schema:Intangible .

schema:Question a rdfs:Class ;
    rdfs:label "Question" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_QAStackExchange> ;
    rdfs:comment "A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document." ;
    rdfs:subClassOf schema:CreativeWork .

schema:QuoteAction a rdfs:Class ;
    rdfs:label "QuoteAction" ;
    rdfs:comment "An agent quotes/estimates/appraises an object/product/service with a price at a location/store." ;
    rdfs:subClassOf schema:TradeAction .

schema:RVPark a rdfs:Class ;
    rdfs:label "RVPark" ;
    rdfs:comment "A place offering space for \"Recreational Vehicles\", Caravans, mobile homes and the like." ;
    rdfs:subClassOf schema:CivicStructure .

schema:RadioChannel a rdfs:Class ;
    rdfs:label "RadioChannel" ;
    rdfs:comment "A unique instance of a radio BroadcastService on a CableOrSatelliteService lineup." ;
    rdfs:subClassOf schema:BroadcastChannel .

schema:RadioClip a rdfs:Class ;
    rdfs:label "RadioClip" ;
    rdfs:comment "A short radio program or a segment/part of a radio program." ;
    rdfs:subClassOf schema:Clip .

schema:RadioEpisode a rdfs:Class ;
    rdfs:label "RadioEpisode" ;
    rdfs:comment "A radio episode which can be part of a series or season." ;
    rdfs:subClassOf schema:Episode .

schema:RadioSeason a rdfs:Class ;
    rdfs:label "RadioSeason" ;
    rdfs:comment "Season dedicated to radio broadcast and associated online delivery." ;
    rdfs:subClassOf schema:CreativeWorkSeason .

schema:RadioSeries a rdfs:Class ;
    rdfs:label "RadioSeries" ;
    rdfs:comment "CreativeWorkSeries dedicated to radio broadcast and associated online delivery." ;
    rdfs:subClassOf schema:CreativeWorkSeries .

schema:RadioStation a rdfs:Class ;
    rdfs:label "RadioStation" ;
    rdfs:comment "A radio station." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:Rating a rdfs:Class ;
    rdfs:label "Rating" ;
    rdfs:comment "A rating is an evaluation on a numeric scale, such as 1 to 5 stars." ;
    rdfs:subClassOf schema:Intangible .

schema:ReactAction a rdfs:Class ;
    rdfs:label "ReactAction" ;
    rdfs:comment "The act of responding instinctively and emotionally to an object, expressing a sentiment." ;
    rdfs:subClassOf schema:AssessAction .

schema:ReadAction a rdfs:Class ;
    rdfs:label "ReadAction" ;
    rdfs:comment "The act of consuming written content." ;
    rdfs:subClassOf schema:ConsumeAction .

schema:RealEstateAgent a rdfs:Class ;
    rdfs:label "RealEstateAgent" ;
    rdfs:comment "A real-estate agent." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:ReceiveAction a rdfs:Class ;
    rdfs:label "ReceiveAction" ;
    rdfs:comment """The act of physically/electronically taking delivery of an object thathas been transferred from an origin to a destination. Reciprocal of SendAction.<br/><br/>

Related actions:<br/><br/>

<ul>
<li><a class="localLink" href="http://schema.org/SendAction">SendAction</a>: The reciprocal of ReceiveAction.</li>
<li><a class="localLink" href="http://schema.org/TakeAction">TakeAction</a>: Unlike TakeAction, ReceiveAction does not imply that the ownership has been transfered (e.g. I can receive a package, but it does not mean the package is now mine).</li>
</ul>
""" ;
    rdfs:subClassOf schema:TransferAction .

schema:Recipe a rdfs:Class ;
    rdfs:label "Recipe" ;
    rdfs:comment "A recipe. For dietary restrictions covered by the recipe, a few common restrictions are enumerated via <a class=\"localLink\" href=\"http://schema.org/suitableForDiet\">suitableForDiet</a>. The <a class=\"localLink\" href=\"http://schema.org/keywords\">keywords</a> property can also be used to add more detail." ;
    rdfs:subClassOf schema:HowTo .

schema:RecyclingCenter a rdfs:Class ;
    rdfs:label "RecyclingCenter" ;
    rdfs:comment "A recycling center." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:RegisterAction a rdfs:Class ;
    rdfs:label "RegisterAction" ;
    rdfs:comment """The act of registering to be a user of a service, product or web page.<br/><br/>

Related actions:<br/><br/>

<ul>
<li><a class="localLink" href="http://schema.org/JoinAction">JoinAction</a>: Unlike JoinAction, RegisterAction implies you are registering to be a user of a service, <em>not</em> a group/team of people.</li>
<li>[FollowAction]]: Unlike FollowAction, RegisterAction doesn't imply that the agent is expecting to poll for updates from the object.</li>
<li><a class="localLink" href="http://schema.org/SubscribeAction">SubscribeAction</a>: Unlike SubscribeAction, RegisterAction doesn't imply that the agent is expecting updates from the object.</li>
</ul>
""" ;
    rdfs:subClassOf schema:InteractAction .

schema:RejectAction a rdfs:Class ;
    rdfs:label "RejectAction" ;
    rdfs:comment """The act of rejecting to/adopting an object.<br/><br/>

Related actions:<br/><br/>

<ul>
<li><a class="localLink" href="http://schema.org/AcceptAction">AcceptAction</a>: The antonym of RejectAction.</li>
</ul>
""" ;
    rdfs:subClassOf schema:AllocateAction .

schema:RentAction a rdfs:Class ;
    rdfs:label "RentAction" ;
    rdfs:comment "The act of giving money in return for temporary use, but not ownership, of an object such as a vehicle or property. For example, an agent rents a property from a landlord in exchange for a periodic payment." ;
    rdfs:subClassOf schema:TradeAction .

schema:RentalCarReservation a rdfs:Class ;
    rdfs:label "RentalCarReservation" ;
    rdfs:comment """A reservation for a rental car.<br/><br/>

Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.""" ;
    rdfs:subClassOf schema:Reservation .

schema:ReplaceAction a rdfs:Class ;
    rdfs:label "ReplaceAction" ;
    rdfs:comment "The act of editing a recipient by replacing an old object with a new object." ;
    rdfs:subClassOf schema:UpdateAction .

schema:ReplyAction a rdfs:Class ;
    rdfs:label "ReplyAction" ;
    rdfs:comment """The act of responding to a question/message asked/sent by the object. Related to <a class="localLink" href="http://schema.org/AskAction">AskAction</a><br/><br/>

Related actions:<br/><br/>

<ul>
<li><a class="localLink" href="http://schema.org/AskAction">AskAction</a>: Appears generally as an origin of a ReplyAction.</li>
</ul>
""" ;
    rdfs:subClassOf schema:CommunicateAction .

schema:Report a rdfs:Class ;
    rdfs:label "Report" ;
    rdfs:comment "A Report generated by governmental or non-governmental organization." ;
    rdfs:subClassOf schema:Article .

schema:Reservation a rdfs:Class ;
    rdfs:label "Reservation" ;
    rdfs:comment """Describes a reservation for travel, dining or an event. Some reservations require tickets. <br/><br/>

Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, restaurant reservations, flights, or rental cars, use <a class="localLink" href="http://schema.org/Offer">Offer</a>.""" ;
    rdfs:subClassOf schema:Intangible .

schema:ReservationPackage a rdfs:Class ;
    rdfs:label "ReservationPackage" ;
    rdfs:comment "A group of multiple reservations with common values for all sub-reservations." ;
    rdfs:subClassOf schema:Reservation .

schema:ReservationStatusType a rdfs:Class ;
    rdfs:label "ReservationStatusType" ;
    rdfs:comment "Enumerated status values for Reservation." ;
    rdfs:subClassOf schema:Enumeration .

schema:ReserveAction a rdfs:Class ;
    rdfs:label "ReserveAction" ;
    rdfs:comment """Reserving a concrete object.<br/><br/>

Related actions:<br/><br/>

<ul>
<li><a class="localLink" href="http://schema.org/ScheduleAction">ScheduleAction</a></a>: Unlike ScheduleAction, ReserveAction reserves concrete objects (e.g. a table, a hotel) towards a time slot / spatial allocation.</li>
</ul>
""" ;
    rdfs:subClassOf schema:PlanAction .

schema:Reservoir a rdfs:Class ;
    rdfs:label "Reservoir" ;
    rdfs:comment "A reservoir of water, typically an artificially created lake, like the Lake Kariba reservoir." ;
    rdfs:subClassOf schema:BodyOfWater .

schema:Residence a rdfs:Class ;
    rdfs:label "Residence" ;
    rdfs:comment "The place where a person lives." ;
    rdfs:subClassOf schema:Place .

schema:Resort a rdfs:Class ;
    rdfs:label "Resort" ;
    dct:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> ;
    rdfs:comment """A resort is a place used for relaxation or recreation, attracting visitors for holidays or vacations. Resorts are places, towns or sometimes commercial establishment operated by a single company (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Resort">http://en.wikipedia.org/wiki/Resort</a>).
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.""" ;
    rdfs:subClassOf schema:LodgingBusiness .

schema:Restaurant a rdfs:Class ;
    rdfs:label "Restaurant" ;
    rdfs:comment "A restaurant." ;
    rdfs:subClassOf schema:FoodEstablishment .

schema:RestrictedDiet a rdfs:Class ;
    rdfs:label "RestrictedDiet" ;
    rdfs:comment "A diet restricted to certain foods or preparations for cultural, religious, health or lifestyle reasons." ;
    rdfs:subClassOf schema:Enumeration .

schema:ResumeAction a rdfs:Class ;
    rdfs:label "ResumeAction" ;
    rdfs:comment "The act of resuming a device or application which was formerly paused (e.g. resume music playback or resume a timer)." ;
    rdfs:subClassOf schema:ControlAction .

schema:ReturnAction a rdfs:Class ;
    rdfs:label "ReturnAction" ;
    rdfs:comment "The act of returning to the origin that which was previously received (concrete objects) or taken (ownership)." ;
    rdfs:subClassOf schema:TransferAction .

schema:Review a rdfs:Class ;
    rdfs:label "Review" ;
    rdfs:comment "A review of an item - for example, of a restaurant, movie, or store." ;
    rdfs:subClassOf schema:CreativeWork .

schema:ReviewAction a rdfs:Class ;
    rdfs:label "ReviewAction" ;
    rdfs:comment "The act of producing a balanced opinion about the object for an audience. An agent reviews an object with participants resulting in a review." ;
    rdfs:subClassOf schema:AssessAction .

schema:RiverBodyOfWater a rdfs:Class ;
    rdfs:label "RiverBodyOfWater" ;
    rdfs:comment "A river (for example, the broad majestic Shannon)." ;
    rdfs:subClassOf schema:BodyOfWater .

schema:Role a rdfs:Class ;
    rdfs:label "Role" ;
    rdfs:comment """Represents additional information about a relationship or property. For example a Role can be used to say that a 'member' role linking some SportsTeam to a player occurred during a particular time period. Or that a Person's 'actor' role in a Movie was for some particular characterName. Such properties can be attached to a Role entity, which is then associated with the main entities using ordinary properties like 'member' or 'actor'.<br/><br/>

See also <a href="http://blog.schema.org/2014/06/introducing-role.html">blog post</a>.""" ;
    rdfs:subClassOf schema:Intangible .

schema:RoofingContractor a rdfs:Class ;
    rdfs:label "RoofingContractor" ;
    rdfs:comment "A roofing contractor." ;
    rdfs:subClassOf schema:HomeAndConstructionBusiness .

schema:Room a rdfs:Class ;
    rdfs:label "Room" ;
    dct:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> ;
    rdfs:comment """A room is a distinguishable space within a structure, usually separated from other spaces by interior walls. (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Room">http://en.wikipedia.org/wiki/Room</a>).
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.""" ;
    rdfs:subClassOf schema:Accommodation .

schema:RsvpAction a rdfs:Class ;
    rdfs:label "RsvpAction" ;
    rdfs:comment "The act of notifying an event organizer as to whether you expect to attend the event." ;
    rdfs:subClassOf schema:InformAction .

schema:RsvpResponseType a rdfs:Class ;
    rdfs:label "RsvpResponseType" ;
    rdfs:comment "RsvpResponseType is an enumeration type whose instances represent responding to an RSVP request." ;
    rdfs:subClassOf schema:Enumeration .

schema:SaleEvent a rdfs:Class ;
    rdfs:label "SaleEvent" ;
    rdfs:comment "Event type: Sales event." ;
    rdfs:subClassOf schema:Event .

schema:ScheduleAction a rdfs:Class ;
    rdfs:label "ScheduleAction" ;
    rdfs:comment """Scheduling future actions, events, or tasks.<br/><br/>

Related actions:<br/><br/>

<ul>
<li><a class="localLink" href="http://schema.org/ReserveAction">ReserveAction</a>: Unlike ReserveAction, ScheduleAction allocates future actions (e.g. an event, a task, etc) towards a time slot / spatial allocation.</li>
</ul>
""" ;
    rdfs:subClassOf schema:PlanAction .

schema:ScholarlyArticle a rdfs:Class ;
    rdfs:label "ScholarlyArticle" ;
    rdfs:comment "A scholarly article." ;
    rdfs:subClassOf schema:Article .

schema:School a rdfs:Class ;
    rdfs:label "School" ;
    rdfs:comment "A school." ;
    rdfs:subClassOf schema:EducationalOrganization .

schema:ScreeningEvent a rdfs:Class ;
    rdfs:label "ScreeningEvent" ;
    rdfs:comment "A screening of a movie or other video." ;
    rdfs:subClassOf schema:Event .

schema:Sculpture a rdfs:Class ;
    rdfs:label "Sculpture" ;
    rdfs:comment "A piece of sculpture." ;
    rdfs:subClassOf schema:CreativeWork .

schema:SeaBodyOfWater a rdfs:Class ;
    rdfs:label "SeaBodyOfWater" ;
    rdfs:comment "A sea (for example, the Caspian sea)." ;
    rdfs:subClassOf schema:BodyOfWater .

schema:SearchAction a rdfs:Class ;
    rdfs:label "SearchAction" ;
    rdfs:comment """The act of searching for an object.<br/><br/>

Related actions:<br/><br/>

<ul>
<li><a class="localLink" href="http://schema.org/FindAction">FindAction</a>: SearchAction generally leads to a FindAction, but not necessarily.</li>
</ul>
""" ;
    rdfs:subClassOf schema:Action .

schema:SearchResultsPage a rdfs:Class ;
    rdfs:label "SearchResultsPage" ;
    rdfs:comment "Web page type: Search results page." ;
    rdfs:subClassOf schema:WebPage .

schema:Season a rdfs:Class ;
    rdfs:label "Season" ;
    schema:supersededBy schema:CreativeWorkSeason ;
    rdfs:comment "A media season e.g. tv, radio, video game etc." ;
    rdfs:subClassOf schema:CreativeWork .

schema:Seat a rdfs:Class ;
    rdfs:label "Seat" ;
    rdfs:comment "Used to describe a seat, such as a reserved seat in an event reservation." ;
    rdfs:subClassOf schema:Intangible .

schema:SelfStorage a rdfs:Class ;
    rdfs:label "SelfStorage" ;
    rdfs:comment "A self-storage facility." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:SellAction a rdfs:Class ;
    rdfs:label "SellAction" ;
    rdfs:comment "The act of taking money from a buyer in exchange for goods or services rendered. An agent sells an object, product, or service to a buyer for a price. Reciprocal of BuyAction." ;
    rdfs:subClassOf schema:TradeAction .

schema:SendAction a rdfs:Class ;
    rdfs:label "SendAction" ;
    rdfs:comment """The act of physically/electronically dispatching an object for transfer from an origin to a destination.Related actions:<br/><br/>

<ul>
<li><a class="localLink" href="http://schema.org/ReceiveAction">ReceiveAction</a>: The reciprocal of SendAction.</li>
<li><a class="localLink" href="http://schema.org/GiveAction">GiveAction</a>: Unlike GiveAction, SendAction does not imply the transfer of ownership (e.g. I can send you my laptop, but I'm not necessarily giving it to you).</li>
</ul>
""" ;
    rdfs:subClassOf schema:TransferAction .

schema:Series a rdfs:Class ;
    rdfs:label "Series" ;
    rdfs:comment "A Series in schema.org is a group of related items, typically but not necessarily of the same kind. See also <a class=\"localLink\" href=\"http://schema.org/CreativeWorkSeries\">CreativeWorkSeries</a>, <a class=\"localLink\" href=\"http://schema.org/EventSeries\">EventSeries</a>." ;
    rdfs:subClassOf schema:Intangible .

schema:Service a rdfs:Class ;
    rdfs:label "Service" ;
    rdfs:comment "A service provided by an organization, e.g. delivery service, print services, etc." ;
    rdfs:subClassOf schema:Intangible .

schema:ServiceChannel a rdfs:Class ;
    rdfs:label "ServiceChannel" ;
    rdfs:comment "A means for accessing a service, e.g. a government office location, web site, or phone number." ;
    rdfs:subClassOf schema:Intangible .

schema:ShareAction a rdfs:Class ;
    rdfs:label "ShareAction" ;
    rdfs:comment "The act of distributing content to people for their amusement or edification." ;
    rdfs:subClassOf schema:CommunicateAction .

schema:ShoeStore a rdfs:Class ;
    rdfs:label "ShoeStore" ;
    rdfs:comment "A shoe store." ;
    rdfs:subClassOf schema:Store .

schema:ShoppingCenter a rdfs:Class ;
    rdfs:label "ShoppingCenter" ;
    rdfs:comment "A shopping center or mall." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:SingleFamilyResidence a rdfs:Class ;
    rdfs:label "SingleFamilyResidence" ;
    rdfs:comment "Residence type: Single-family home." ;
    rdfs:subClassOf schema:House .

schema:SiteNavigationElement a rdfs:Class ;
    rdfs:label "SiteNavigationElement" ;
    rdfs:comment "A navigation element of the page." ;
    rdfs:subClassOf schema:WebPageElement .

schema:SkiResort a rdfs:Class ;
    rdfs:label "SkiResort" ;
    rdfs:comment "A ski resort." ;
    rdfs:subClassOf schema:SportsActivityLocation .

schema:SocialEvent a rdfs:Class ;
    rdfs:label "SocialEvent" ;
    rdfs:comment "Event type: Social event." ;
    rdfs:subClassOf schema:Event .

schema:SocialMediaPosting a rdfs:Class ;
    rdfs:label "SocialMediaPosting" ;
    rdfs:comment "A post to a social media platform, including blog posts, tweets, Facebook posts, etc." ;
    rdfs:subClassOf schema:Article .

schema:SoftwareApplication a rdfs:Class ;
    rdfs:label "SoftwareApplication" ;
    rdfs:comment "A software application." ;
    rdfs:subClassOf schema:CreativeWork .

schema:SoftwareSourceCode a rdfs:Class ;
    rdfs:label "SoftwareSourceCode" ;
    rdfs:comment "Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates." ;
    rdfs:subClassOf schema:CreativeWork .

schema:SomeProducts a rdfs:Class ;
    rdfs:label "SomeProducts" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> ;
    rdfs:comment "A placeholder for multiple similar products of the same kind." ;
    rdfs:subClassOf schema:Product .

schema:SpeakableSpecification a rdfs:Class ;
    rdfs:label "SpeakableSpecification" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1389> ;
    schema:category "issue-1389" ;
    rdfs:comment "A SpeakableSpecification indicates (typically via <a class=\"localLink\" href=\"http://schema.org/xpath\">xpath</a> or <a class=\"localLink\" href=\"http://schema.org/cssSelector\">cssSelector</a>) sections of a document that are highlighted as particularly <a class=\"localLink\" href=\"http://schema.org/speakable\">speakable</a>. Instances of this type are expected to be used primarily as values of the <a class=\"localLink\" href=\"http://schema.org/speakable\">speakable</a> property." ;
    rdfs:subClassOf schema:Intangible .

schema:Specialty a rdfs:Class ;
    rdfs:label "Specialty" ;
    rdfs:comment "Any branch of a field in which people typically develop specific expertise, usually after significant study, time, and effort." ;
    rdfs:subClassOf schema:Enumeration .

schema:SportingGoodsStore a rdfs:Class ;
    rdfs:label "SportingGoodsStore" ;
    rdfs:comment "A sporting goods store." ;
    rdfs:subClassOf schema:Store .

schema:SportsActivityLocation a rdfs:Class ;
    rdfs:label "SportsActivityLocation" ;
    rdfs:comment "A sports location, such as a playing field." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:SportsClub a rdfs:Class ;
    rdfs:label "SportsClub" ;
    rdfs:comment "A sports club." ;
    rdfs:subClassOf schema:SportsActivityLocation .

schema:SportsEvent a rdfs:Class ;
    rdfs:label "SportsEvent" ;
    rdfs:comment "Event type: Sports event." ;
    rdfs:subClassOf schema:Event .

schema:SportsOrganization a rdfs:Class ;
    rdfs:label "SportsOrganization" ;
    rdfs:comment "Represents the collection of all sports organizations, including sports teams, governing bodies, and sports associations." ;
    rdfs:subClassOf schema:Organization .

schema:SportsTeam a rdfs:Class ;
    rdfs:label "SportsTeam" ;
    rdfs:comment "Organization: Sports team." ;
    rdfs:subClassOf schema:SportsOrganization .

schema:SpreadsheetDigitalDocument a rdfs:Class ;
    rdfs:label "SpreadsheetDigitalDocument" ;
    rdfs:comment "A spreadsheet file." ;
    rdfs:subClassOf schema:DigitalDocument .

schema:StadiumOrArena a rdfs:Class ;
    rdfs:label "StadiumOrArena" ;
    rdfs:comment "A stadium." ;
    rdfs:subClassOf schema:CivicStructure,
        schema:SportsActivityLocation .

schema:State a rdfs:Class ;
    rdfs:label "State" ;
    rdfs:comment "A state or province of a country." ;
    rdfs:subClassOf schema:AdministrativeArea .

schema:SteeringPositionValue a rdfs:Class ;
    rdfs:label "SteeringPositionValue" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> ;
    rdfs:comment "A value indicating a steering position." ;
    rdfs:subClassOf schema:QualitativeValue .

schema:Store a rdfs:Class ;
    rdfs:label "Store" ;
    rdfs:comment "A retail good store." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:StructuredValue a rdfs:Class ;
    rdfs:label "StructuredValue" ;
    rdfs:comment "Structured values are used when the value of a property has a more complex structure than simply being a textual value or a reference to another thing." ;
    rdfs:subClassOf schema:Intangible .

schema:SubscribeAction a rdfs:Class ;
    rdfs:label "SubscribeAction" ;
    rdfs:comment """The act of forming a personal connection with someone/something (object) unidirectionally/asymmetrically to get updates pushed to.<br/><br/>

Related actions:<br/><br/>

<ul>
<li><a class="localLink" href="http://schema.org/FollowAction">FollowAction</a>: Unlike FollowAction, SubscribeAction implies that the subscriber acts as a passive agent being constantly/actively pushed for updates.</li>
<li><a class="localLink" href="http://schema.org/RegisterAction">RegisterAction</a>: Unlike RegisterAction, SubscribeAction implies that the agent is interested in continuing receiving updates from the object.</li>
<li><a class="localLink" href="http://schema.org/JoinAction">JoinAction</a>: Unlike JoinAction, SubscribeAction implies that the agent is interested in continuing receiving updates from the object.</li>
</ul>
""" ;
    rdfs:subClassOf schema:InteractAction .

schema:SubwayStation a rdfs:Class ;
    rdfs:label "SubwayStation" ;
    rdfs:comment "A subway station." ;
    rdfs:subClassOf schema:CivicStructure .

schema:Suite a rdfs:Class ;
    rdfs:label "Suite" ;
    dct:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> ;
    rdfs:comment """A suite in a hotel or other public accommodation, denotes a class of luxury accommodations, the key feature of which is multiple rooms (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Suite_(hotel)">http://en.wikipedia.org/wiki/Suite_(hotel)</a>).
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.""" ;
    rdfs:subClassOf schema:Accommodation .

schema:SuspendAction a rdfs:Class ;
    rdfs:label "SuspendAction" ;
    rdfs:comment "The act of momentarily pausing a device or application (e.g. pause music playback or pause a timer)." ;
    rdfs:subClassOf schema:ControlAction .

schema:Synagogue a rdfs:Class ;
    rdfs:label "Synagogue" ;
    rdfs:comment "A synagogue." ;
    rdfs:subClassOf schema:PlaceOfWorship .

schema:TVClip a rdfs:Class ;
    rdfs:label "TVClip" ;
    rdfs:comment "A short TV program or a segment/part of a TV program." ;
    rdfs:subClassOf schema:Clip .

schema:TVEpisode a rdfs:Class ;
    rdfs:label "TVEpisode" ;
    rdfs:comment "A TV episode which can be part of a series or season." ;
    rdfs:subClassOf schema:Episode .

schema:TVSeason a rdfs:Class ;
    rdfs:label "TVSeason" ;
    rdfs:comment "Season dedicated to TV broadcast and associated online delivery." ;
    rdfs:subClassOf schema:CreativeWork,
        schema:CreativeWorkSeason .

schema:TVSeries a rdfs:Class ;
    rdfs:label "TVSeries" ;
    rdfs:comment "CreativeWorkSeries dedicated to TV broadcast and associated online delivery." ;
    rdfs:subClassOf schema:CreativeWork,
        schema:CreativeWorkSeries .

schema:Table a rdfs:Class ;
    rdfs:label "Table" ;
    rdfs:comment "A table on a Web page." ;
    rdfs:subClassOf schema:WebPageElement .

schema:TakeAction a rdfs:Class ;
    rdfs:label "TakeAction" ;
    rdfs:comment """The act of gaining ownership of an object from an origin. Reciprocal of GiveAction.<br/><br/>

Related actions:<br/><br/>

<ul>
<li><a class="localLink" href="http://schema.org/GiveAction">GiveAction</a>: The reciprocal of TakeAction.</li>
<li><a class="localLink" href="http://schema.org/ReceiveAction">ReceiveAction</a>: Unlike ReceiveAction, TakeAction implies that ownership has been transfered.</li>
</ul>
""" ;
    rdfs:subClassOf schema:TransferAction .

schema:TattooParlor a rdfs:Class ;
    rdfs:label "TattooParlor" ;
    rdfs:comment "A tattoo parlor." ;
    rdfs:subClassOf schema:HealthAndBeautyBusiness .

schema:Taxi a rdfs:Class ;
    rdfs:label "Taxi" ;
    schema:supersededBy schema:TaxiService ;
    rdfs:comment "A taxi." ;
    rdfs:subClassOf schema:Service .

schema:TaxiReservation a rdfs:Class ;
    rdfs:label "TaxiReservation" ;
    rdfs:comment """A reservation for a taxi.<br/><br/>

Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use <a class="localLink" href="http://schema.org/Offer">Offer</a>.""" ;
    rdfs:subClassOf schema:Reservation .

schema:TaxiService a rdfs:Class ;
    rdfs:label "TaxiService" ;
    rdfs:comment "A service for a vehicle for hire with a driver for local travel. Fares are usually calculated based on distance traveled." ;
    rdfs:subClassOf schema:Service .

schema:TaxiStand a rdfs:Class ;
    rdfs:label "TaxiStand" ;
    rdfs:comment "A taxi stand." ;
    rdfs:subClassOf schema:CivicStructure .

schema:TechArticle a rdfs:Class ;
    rdfs:label "TechArticle" ;
    rdfs:comment "A technical article - Example: How-to (task) topics, step-by-step, procedural troubleshooting, specifications, etc." ;
    rdfs:subClassOf schema:Article .

schema:TelevisionChannel a rdfs:Class ;
    rdfs:label "TelevisionChannel" ;
    rdfs:comment "A unique instance of a television BroadcastService on a CableOrSatelliteService lineup." ;
    rdfs:subClassOf schema:BroadcastChannel .

schema:TelevisionStation a rdfs:Class ;
    rdfs:label "TelevisionStation" ;
    rdfs:comment "A television station." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:TennisComplex a rdfs:Class ;
    rdfs:label "TennisComplex" ;
    rdfs:comment "A tennis complex." ;
    rdfs:subClassOf schema:SportsActivityLocation .

schema:Text a schema:DataType,
        rdfs:Class ;
    rdfs:label "Text" ;
    rdfs:comment "Data type: Text." .

schema:TextDigitalDocument a rdfs:Class ;
    rdfs:label "TextDigitalDocument" ;
    rdfs:comment "A file composed primarily of text." ;
    rdfs:subClassOf schema:DigitalDocument .

schema:TheaterEvent a rdfs:Class ;
    rdfs:label "TheaterEvent" ;
    rdfs:comment "Event type: Theater performance." ;
    rdfs:subClassOf schema:Event .

schema:TheaterGroup a rdfs:Class ;
    rdfs:label "TheaterGroup" ;
    rdfs:comment "A theater group or company, for example, the Royal Shakespeare Company or Druid Theatre." ;
    rdfs:subClassOf schema:PerformingGroup .

schema:Thing a rdfs:Class ;
    rdfs:label "Thing" ;
    rdfs:comment "The most generic type of item." .

schema:Ticket a rdfs:Class ;
    rdfs:label "Ticket" ;
    rdfs:comment "Used to describe a ticket to an event, a flight, a bus ride, etc." ;
    rdfs:subClassOf schema:Intangible .

schema:TieAction a rdfs:Class ;
    rdfs:label "TieAction" ;
    rdfs:comment "The act of reaching a draw in a competitive activity." ;
    rdfs:subClassOf schema:AchieveAction .

schema:Time a schema:DataType,
        rdfs:Class ;
    rdfs:label "Time" ;
    rdfs:comment "A point in time recurring on multiple days in the form hh:mm:ss[Z|(+|-)hh:mm] (see <a href=\"http://www.w3.org/TR/xmlschema-2/#time\">XML schema for details</a>)." .

schema:TipAction a rdfs:Class ;
    rdfs:label "TipAction" ;
    rdfs:comment "The act of giving money voluntarily to a beneficiary in recognition of services rendered." ;
    rdfs:subClassOf schema:TradeAction .

schema:TireShop a rdfs:Class ;
    rdfs:label "TireShop" ;
    rdfs:comment "A tire shop." ;
    rdfs:subClassOf schema:Store .

schema:TouristAttraction a rdfs:Class ;
    rdfs:label "TouristAttraction" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#IIT-CNR.it>,
        <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Tourism> ;
    rdfs:comment "A tourist attraction.  In principle any Thing can be a <a class=\"localLink\" href=\"http://schema.org/TouristAttraction\">TouristAttraction</a>, from a <a class=\"localLink\" href=\"http://schema.org/Mountain\">Mountain</a> and <a class=\"localLink\" href=\"http://schema.org/LandmarksOrHistoricalBuildings\">LandmarksOrHistoricalBuildings</a> to a <a class=\"localLink\" href=\"http://schema.org/LocalBusiness\">LocalBusiness</a>.  This Type can be used on its own to describe a general <a class=\"localLink\" href=\"http://schema.org/TouristAttraction\">TouristAttraction</a>, or be used as an <a class=\"localLink\" href=\"http://schema.org/additionalType\">additionalType</a> to add tourist attraction properties to any other type.  (See examples below)" ;
    rdfs:subClassOf schema:Place .

schema:TouristInformationCenter a rdfs:Class ;
    rdfs:label "TouristInformationCenter" ;
    rdfs:comment "A tourist information center." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:ToyStore a rdfs:Class ;
    rdfs:label "ToyStore" ;
    rdfs:comment "A toy store." ;
    rdfs:subClassOf schema:Store .

schema:TrackAction a rdfs:Class ;
    rdfs:label "TrackAction" ;
    rdfs:comment """An agent tracks an object for updates.<br/><br/>

Related actions:<br/><br/>

<ul>
<li><a class="localLink" href="http://schema.org/FollowAction">FollowAction</a>: Unlike FollowAction, TrackAction refers to the interest on the location of innanimates objects.</li>
<li><a class="localLink" href="http://schema.org/SubscribeAction">SubscribeAction</a>: Unlike SubscribeAction, TrackAction refers to  the interest on the location of innanimate objects.</li>
</ul>
""" ;
    rdfs:subClassOf schema:FindAction .

schema:TradeAction a rdfs:Class ;
    rdfs:label "TradeAction" ;
    rdfs:comment "The act of participating in an exchange of goods and services for monetary compensation. An agent trades an object, product or service with a participant in exchange for a one time or periodic payment." ;
    rdfs:subClassOf schema:Action .

schema:TrainReservation a rdfs:Class ;
    rdfs:label "TrainReservation" ;
    rdfs:comment """A reservation for train travel.<br/><br/>

Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use <a class="localLink" href="http://schema.org/Offer">Offer</a>.""" ;
    rdfs:subClassOf schema:Reservation .

schema:TrainStation a rdfs:Class ;
    rdfs:label "TrainStation" ;
    rdfs:comment "A train station." ;
    rdfs:subClassOf schema:CivicStructure .

schema:TrainTrip a rdfs:Class ;
    rdfs:label "TrainTrip" ;
    rdfs:comment "A trip on a commercial train line." ;
    rdfs:subClassOf schema:Trip .

schema:TransferAction a rdfs:Class ;
    rdfs:label "TransferAction" ;
    rdfs:comment "The act of transferring/moving (abstract or concrete) animate or inanimate objects from one place to another." ;
    rdfs:subClassOf schema:Action .

schema:TravelAction a rdfs:Class ;
    rdfs:label "TravelAction" ;
    rdfs:comment "The act of traveling from an fromLocation to a destination by a specified mode of transport, optionally with participants." ;
    rdfs:subClassOf schema:MoveAction .

schema:TravelAgency a rdfs:Class ;
    rdfs:label "TravelAgency" ;
    rdfs:comment "A travel agency." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:Trip a rdfs:Class ;
    rdfs:label "Trip" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Tourism> ;
    rdfs:comment "A trip or journey. An itinerary of visits to one or more places." ;
    rdfs:subClassOf schema:Intangible .

schema:TypeAndQuantityNode a rdfs:Class ;
    rdfs:label "TypeAndQuantityNode" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> ;
    rdfs:comment "A structured value indicating the quantity, unit of measurement, and business function of goods included in a bundle offer." ;
    rdfs:subClassOf schema:StructuredValue .

schema:URL a rdfs:Class ;
    rdfs:label "URL" ;
    rdfs:comment "Data type: URL." ;
    rdfs:subClassOf schema:Text .

schema:UnRegisterAction a rdfs:Class ;
    rdfs:label "UnRegisterAction" ;
    rdfs:comment """The act of un-registering from a service.<br/><br/>

Related actions:<br/><br/>

<ul>
<li><a class="localLink" href="http://schema.org/RegisterAction">RegisterAction</a>: antonym of UnRegisterAction.</li>
<li><a class="localLink" href="http://schema.org/LeaveAction">LeaveAction</a>: Unlike LeaveAction, UnRegisterAction implies that you are unregistering from a service you werer previously registered, rather than leaving a team/group of people.</li>
</ul>
""" ;
    rdfs:subClassOf schema:InteractAction .

schema:UnitPriceSpecification a rdfs:Class ;
    rdfs:label "UnitPriceSpecification" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> ;
    rdfs:comment "The price asked for a given offer by the respective organization or person." ;
    rdfs:subClassOf schema:PriceSpecification .

schema:UpdateAction a rdfs:Class ;
    rdfs:label "UpdateAction" ;
    rdfs:comment "The act of managing by changing/editing the state of the object." ;
    rdfs:subClassOf schema:Action .

schema:UseAction a rdfs:Class ;
    rdfs:label "UseAction" ;
    rdfs:comment "The act of applying an object to its intended purpose." ;
    rdfs:subClassOf schema:ConsumeAction .

schema:UserBlocks a rdfs:Class ;
    rdfs:label "UserBlocks" ;
    schema:supersededBy schema:InteractionCounter ;
    rdfs:comment "UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class=\"localLink\" href=\"http://schema.org/Action\">Action</a>-based vocabulary, alongside types such as <a class=\"localLink\" href=\"http://schema.org/Comment\">Comment</a>." ;
    rdfs:subClassOf schema:UserInteraction .

schema:UserCheckins a rdfs:Class ;
    rdfs:label "UserCheckins" ;
    schema:supersededBy schema:InteractionCounter ;
    rdfs:comment "UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class=\"localLink\" href=\"http://schema.org/Action\">Action</a>-based vocabulary, alongside types such as <a class=\"localLink\" href=\"http://schema.org/Comment\">Comment</a>." ;
    rdfs:subClassOf schema:UserInteraction .

schema:UserComments a rdfs:Class ;
    rdfs:label "UserComments" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews> ;
    schema:supersededBy schema:InteractionCounter ;
    rdfs:comment "UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class=\"localLink\" href=\"http://schema.org/Action\">Action</a>-based vocabulary, alongside types such as <a class=\"localLink\" href=\"http://schema.org/Comment\">Comment</a>." ;
    rdfs:subClassOf schema:UserInteraction .

schema:UserDownloads a rdfs:Class ;
    rdfs:label "UserDownloads" ;
    schema:supersededBy schema:InteractionCounter ;
    rdfs:comment "UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class=\"localLink\" href=\"http://schema.org/Action\">Action</a>-based vocabulary, alongside types such as <a class=\"localLink\" href=\"http://schema.org/Comment\">Comment</a>." ;
    rdfs:subClassOf schema:UserInteraction .

schema:UserInteraction a rdfs:Class ;
    rdfs:label "UserInteraction" ;
    schema:supersededBy schema:InteractionCounter ;
    rdfs:comment "UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class=\"localLink\" href=\"http://schema.org/Action\">Action</a>-based vocabulary, alongside types such as <a class=\"localLink\" href=\"http://schema.org/Comment\">Comment</a>." ;
    rdfs:subClassOf schema:Event .

schema:UserLikes a rdfs:Class ;
    rdfs:label "UserLikes" ;
    schema:supersededBy schema:InteractionCounter ;
    rdfs:comment "UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class=\"localLink\" href=\"http://schema.org/Action\">Action</a>-based vocabulary, alongside types such as <a class=\"localLink\" href=\"http://schema.org/Comment\">Comment</a>." ;
    rdfs:subClassOf schema:UserInteraction .

schema:UserPageVisits a rdfs:Class ;
    rdfs:label "UserPageVisits" ;
    schema:supersededBy schema:InteractionCounter ;
    rdfs:comment "UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class=\"localLink\" href=\"http://schema.org/Action\">Action</a>-based vocabulary, alongside types such as <a class=\"localLink\" href=\"http://schema.org/Comment\">Comment</a>." ;
    rdfs:subClassOf schema:UserInteraction .

schema:UserPlays a rdfs:Class ;
    rdfs:label "UserPlays" ;
    schema:supersededBy schema:InteractionCounter ;
    rdfs:comment "UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class=\"localLink\" href=\"http://schema.org/Action\">Action</a>-based vocabulary, alongside types such as <a class=\"localLink\" href=\"http://schema.org/Comment\">Comment</a>." ;
    rdfs:subClassOf schema:UserInteraction .

schema:UserPlusOnes a rdfs:Class ;
    rdfs:label "UserPlusOnes" ;
    schema:supersededBy schema:InteractionCounter ;
    rdfs:comment "UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class=\"localLink\" href=\"http://schema.org/Action\">Action</a>-based vocabulary, alongside types such as <a class=\"localLink\" href=\"http://schema.org/Comment\">Comment</a>." ;
    rdfs:subClassOf schema:UserInteraction .

schema:UserTweets a rdfs:Class ;
    rdfs:label "UserTweets" ;
    schema:supersededBy schema:InteractionCounter ;
    rdfs:comment "UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class=\"localLink\" href=\"http://schema.org/Action\">Action</a>-based vocabulary, alongside types such as <a class=\"localLink\" href=\"http://schema.org/Comment\">Comment</a>." ;
    rdfs:subClassOf schema:UserInteraction .

schema:Vehicle a rdfs:Class ;
    rdfs:label "Vehicle" ;
    rdfs:comment "A vehicle is a device that is designed or used to transport people or cargo over land, water, air, or through space." ;
    rdfs:subClassOf schema:Product .

schema:VideoGallery a rdfs:Class ;
    rdfs:label "VideoGallery" ;
    rdfs:comment "Web page type: Video gallery page." ;
    rdfs:subClassOf schema:CollectionPage .

schema:VideoGame a rdfs:Class ;
    rdfs:label "VideoGame" ;
    rdfs:comment "A video game is an electronic game that involves human interaction with a user interface to generate visual feedback on a video device." ;
    rdfs:subClassOf schema:Game,
        schema:SoftwareApplication .

schema:VideoGameClip a rdfs:Class ;
    rdfs:label "VideoGameClip" ;
    rdfs:comment "A short segment/part of a video game." ;
    rdfs:subClassOf schema:Clip .

schema:VideoGameSeries a rdfs:Class ;
    rdfs:label "VideoGameSeries" ;
    rdfs:comment "A video game series." ;
    rdfs:subClassOf schema:CreativeWorkSeries .

schema:VideoObject a rdfs:Class ;
    rdfs:label "VideoObject" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews> ;
    rdfs:comment "A video file." ;
    rdfs:subClassOf schema:MediaObject .

schema:ViewAction a rdfs:Class ;
    rdfs:label "ViewAction" ;
    rdfs:comment "The act of consuming static visual content." ;
    rdfs:subClassOf schema:ConsumeAction .

schema:VisualArtsEvent a rdfs:Class ;
    rdfs:label "VisualArtsEvent" ;
    rdfs:comment "Event type: Visual arts event." ;
    rdfs:subClassOf schema:Event .

schema:VisualArtwork a rdfs:Class ;
    rdfs:label "VisualArtwork" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_VisualArtworkClass> ;
    rdfs:comment "A work of art that is primarily visual in character." ;
    rdfs:subClassOf schema:CreativeWork .

schema:Volcano a rdfs:Class ;
    rdfs:label "Volcano" ;
    rdfs:comment "A volcano, like Fuji san." ;
    rdfs:subClassOf schema:Landform .

schema:VoteAction a rdfs:Class ;
    rdfs:label "VoteAction" ;
    rdfs:comment "The act of expressing a preference from a fixed/finite/structured set of choices/options." ;
    rdfs:subClassOf schema:ChooseAction .

schema:WPAdBlock a rdfs:Class ;
    rdfs:label "WPAdBlock" ;
    rdfs:comment "An advertising section of the page." ;
    rdfs:subClassOf schema:WebPageElement .

schema:WPFooter a rdfs:Class ;
    rdfs:label "WPFooter" ;
    rdfs:comment "The footer section of the page." ;
    rdfs:subClassOf schema:WebPageElement .

schema:WPHeader a rdfs:Class ;
    rdfs:label "WPHeader" ;
    rdfs:comment "The header section of the page." ;
    rdfs:subClassOf schema:WebPageElement .

schema:WPSideBar a rdfs:Class ;
    rdfs:label "WPSideBar" ;
    rdfs:comment "A sidebar section of the page." ;
    rdfs:subClassOf schema:WebPageElement .

schema:WantAction a rdfs:Class ;
    rdfs:label "WantAction" ;
    rdfs:comment "The act of expressing a desire about the object. An agent wants an object." ;
    rdfs:subClassOf schema:ReactAction .

schema:WarrantyPromise a rdfs:Class ;
    rdfs:label "WarrantyPromise" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> ;
    rdfs:comment "A structured value representing the duration and scope of services that will be provided to a customer free of charge in case of a defect or malfunction of a product." ;
    rdfs:subClassOf schema:StructuredValue .

schema:WarrantyScope a rdfs:Class ;
    rdfs:label "WarrantyScope" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> ;
    rdfs:comment """A range of of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.<br/><br/>

Commonly used values:<br/><br/>

<ul>
<li>http://purl.org/goodrelations/v1#Labor-BringIn</li>
<li>http://purl.org/goodrelations/v1#PartsAndLabor-BringIn</li>
<li>http://purl.org/goodrelations/v1#PartsAndLabor-PickUp</li>
</ul>
""" ;
    rdfs:subClassOf schema:Enumeration .

schema:WatchAction a rdfs:Class ;
    rdfs:label "WatchAction" ;
    rdfs:comment "The act of consuming dynamic/moving visual content." ;
    rdfs:subClassOf schema:ConsumeAction .

schema:Waterfall a rdfs:Class ;
    rdfs:label "Waterfall" ;
    rdfs:comment "A waterfall, like Niagara." ;
    rdfs:subClassOf schema:BodyOfWater .

schema:WearAction a rdfs:Class ;
    rdfs:label "WearAction" ;
    rdfs:comment "The act of dressing oneself in clothing." ;
    rdfs:subClassOf schema:UseAction .

schema:WebApplication a rdfs:Class ;
    rdfs:label "WebApplication" ;
    rdfs:comment "Web applications." ;
    rdfs:subClassOf schema:SoftwareApplication .

schema:WebPage a rdfs:Class ;
    rdfs:label "WebPage" ;
    rdfs:comment "A web page. Every web page is implicitly assumed to be declared to be of type WebPage, so the various properties about that webpage, such as <code>breadcrumb</code> may be used. We recommend explicit declaration if these properties are specified, but if they are found outside of an itemscope, they will be assumed to be about the page." ;
    rdfs:subClassOf schema:CreativeWork .

schema:WebPageElement a rdfs:Class ;
    rdfs:label "WebPageElement" ;
    rdfs:comment "A web page element, like a table or an image." ;
    rdfs:subClassOf schema:CreativeWork .

schema:WebSite a rdfs:Class ;
    rdfs:label "WebSite" ;
    rdfs:comment "A WebSite is a set of related web pages and other items typically served from a single web domain and accessible via URLs." ;
    rdfs:subClassOf schema:CreativeWork .

schema:WholesaleStore a rdfs:Class ;
    rdfs:label "WholesaleStore" ;
    rdfs:comment "A wholesale store." ;
    rdfs:subClassOf schema:Store .

schema:WinAction a rdfs:Class ;
    rdfs:label "WinAction" ;
    rdfs:comment "The act of achieving victory in a competitive activity." ;
    rdfs:subClassOf schema:AchieveAction .

schema:Winery a rdfs:Class ;
    rdfs:label "Winery" ;
    rdfs:comment "A winery." ;
    rdfs:subClassOf schema:FoodEstablishment .

schema:WorkersUnion a rdfs:Class ;
    rdfs:label "WorkersUnion" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/243> ;
    schema:category "issue-243" ;
    rdfs:comment "A Workers Union (also known as a Labor Union, Labour Union, or Trade Union) is an organization that promotes the interests of its worker members by collectively bargaining with management, organizing, and political lobbying." ;
    rdfs:subClassOf schema:Organization .

schema:WriteAction a rdfs:Class ;
    rdfs:label "WriteAction" ;
    rdfs:comment "The act of authoring written creative content." ;
    rdfs:subClassOf schema:CreateAction .

schema:Zoo a rdfs:Class ;
    rdfs:label "Zoo" ;
    rdfs:comment "A zoo." ;
    rdfs:subClassOf schema:CivicStructure .

schema:ActiveActionStatus a schema:ActionStatusType ;
    rdfs:label "ActiveActionStatus" ;
    rdfs:comment "An in-progress action (e.g, while watching the movie, or driving to a location)." .

schema:AlbumRelease a schema:MusicAlbumReleaseType ;
    rdfs:label "AlbumRelease" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    rdfs:comment "AlbumRelease." .

schema:AllWheelDriveConfiguration a schema:DriveWheelConfigurationValue ;
    rdfs:label "AllWheelDriveConfiguration" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> ;
    rdfs:comment "All-wheel Drive is a transmission layout where the engine drives all four wheels." .

schema:AudiobookFormat a schema:BookFormatType ;
    rdfs:label "AudiobookFormat" ;
    rdfs:comment "Book format: Audiobook. This is an enumerated value for use with the bookFormat property. There is also a type 'Audiobook' in the bib extension which includes Audiobook specific properties." .

schema:BroadcastRelease a schema:MusicAlbumReleaseType ;
    rdfs:label "BroadcastRelease" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    rdfs:comment "BroadcastRelease." .

schema:CDFormat a schema:MusicReleaseFormatType ;
    rdfs:label "CDFormat" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    rdfs:comment "CDFormat." .

schema:CassetteFormat a schema:MusicReleaseFormatType ;
    rdfs:label "CassetteFormat" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    rdfs:comment "CassetteFormat." .

schema:CoOp a schema:GamePlayMode ;
    rdfs:label "CoOp" ;
    rdfs:comment "Play mode: CoOp. Co-operative games, where you play on the same team with friends." .

schema:CommentPermission a schema:DigitalDocumentPermissionType ;
    rdfs:label "CommentPermission" ;
    rdfs:comment "Permission to add comments to the document." .

schema:CompilationAlbum a schema:MusicAlbumProductionType ;
    rdfs:label "CompilationAlbum" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    rdfs:comment "CompilationAlbum." .

schema:CompletedActionStatus a schema:ActionStatusType ;
    rdfs:label "CompletedActionStatus" ;
    rdfs:comment "An action that has already taken place." .

schema:DJMixAlbum a schema:MusicAlbumProductionType ;
    rdfs:label "DJMixAlbum" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    rdfs:comment "DJMixAlbum." .

schema:DVDFormat a schema:MusicReleaseFormatType ;
    rdfs:label "DVDFormat" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    rdfs:comment "DVDFormat." .

schema:DamagedCondition a schema:OfferItemCondition ;
    rdfs:label "DamagedCondition" ;
    rdfs:comment "Indicates that the item is damaged." .

schema:DemoAlbum a schema:MusicAlbumProductionType ;
    rdfs:label "DemoAlbum" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    rdfs:comment "DemoAlbum." .

schema:DiabeticDiet a schema:RestrictedDiet ;
    rdfs:label "DiabeticDiet" ;
    rdfs:comment "A diet appropriate for people with diabetes." .

schema:DigitalAudioTapeFormat a schema:MusicReleaseFormatType ;
    rdfs:label "DigitalAudioTapeFormat" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    rdfs:comment "DigitalAudioTapeFormat." .

schema:DigitalFormat a schema:MusicReleaseFormatType ;
    rdfs:label "DigitalFormat" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    rdfs:comment "DigitalFormat." .

schema:Discontinued a schema:ItemAvailability ;
    rdfs:label "Discontinued" ;
    rdfs:comment "Indicates that the item has been discontinued." .

schema:EBook a schema:BookFormatType ;
    rdfs:label "EBook" ;
    rdfs:comment "Book format: Ebook." .

schema:EPRelease a schema:MusicAlbumReleaseType ;
    rdfs:label "EPRelease" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    rdfs:comment "EPRelease." .

schema:EventCancelled a schema:EventStatusType ;
    rdfs:label "EventCancelled" ;
    rdfs:comment "The event has been cancelled. If the event has multiple startDate values, all are assumed to be cancelled. Either startDate or previousStartDate may be used to specify the event's cancelled date(s)." .

schema:EventPostponed a schema:EventStatusType ;
    rdfs:label "EventPostponed" ;
    rdfs:comment "The event has been postponed and no new date has been set. The event's previousStartDate should be set." .

schema:EventRescheduled a schema:EventStatusType ;
    rdfs:label "EventRescheduled" ;
    rdfs:comment "The event has been rescheduled. The event's previousStartDate should be set to the old date and the startDate should be set to the event's new date. (If the event has been rescheduled multiple times, the previousStartDate property may be repeated)." .

schema:EventScheduled a schema:EventStatusType ;
    rdfs:label "EventScheduled" ;
    rdfs:comment "The event is taking place or has taken place on the startDate as scheduled. Use of this value is optional, as it is assumed by default." .

schema:FailedActionStatus a schema:ActionStatusType ;
    rdfs:label "FailedActionStatus" ;
    rdfs:comment "An action that failed to complete. The action's error property and the HTTP return code contain more information about the failure." .

schema:False a schema:Boolean ;
    rdfs:label "False" ;
    rdfs:comment "The boolean value false." .

schema:Female a schema:GenderType ;
    rdfs:label "Female" ;
    rdfs:comment "The female gender." .

schema:FourWheelDriveConfiguration a schema:DriveWheelConfigurationValue ;
    rdfs:label "FourWheelDriveConfiguration" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> ;
    rdfs:comment "Four-wheel drive is a transmission layout where the engine primarily drives two wheels with a part-time four-wheel drive capability." .

schema:Friday a schema:DayOfWeek ;
    rdfs:label "Friday" ;
    schema:sameAs <http://www.wikidata.org/entity/Q130> ;
    rdfs:comment "The day of the week between Thursday and Saturday." .

schema:FrontWheelDriveConfiguration a schema:DriveWheelConfigurationValue ;
    rdfs:label "FrontWheelDriveConfiguration" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> ;
    rdfs:comment "Front-wheel drive is a transmission layout where the engine drives the front wheels." .

schema:GlutenFreeDiet a schema:RestrictedDiet ;
    rdfs:label "GlutenFreeDiet" ;
    rdfs:comment "A diet exclusive of gluten." .

schema:GroupBoardingPolicy a schema:BoardingPolicyType ;
    rdfs:label "GroupBoardingPolicy" ;
    rdfs:comment "The airline boards by groups based on check-in time, priority, etc." .

schema:HalalDiet a schema:RestrictedDiet ;
    rdfs:label "HalalDiet" ;
    rdfs:comment "A diet conforming to Islamic dietary practices." .

schema:Hardcover a schema:BookFormatType ;
    rdfs:label "Hardcover" ;
    rdfs:comment "Book format: Hardcover." .

schema:HearingImpairedSupported a schema:ContactPointOption ;
    rdfs:label "HearingImpairedSupported" ;
    rdfs:comment "Uses devices to support users with hearing impairments." .

schema:HinduDiet a schema:RestrictedDiet ;
    rdfs:label "HinduDiet" ;
    rdfs:comment "A diet conforming to Hindu dietary practices, in particular, beef-free." .

schema:InStock a schema:ItemAvailability ;
    rdfs:label "InStock" ;
    rdfs:comment "Indicates that the item is in stock." .

schema:InStoreOnly a schema:ItemAvailability ;
    rdfs:label "InStoreOnly" ;
    rdfs:comment "Indicates that the item is available only at physical locations." .

schema:ItemListOrderAscending a schema:ItemListOrderType ;
    rdfs:label "ItemListOrderAscending" ;
    rdfs:comment "An ItemList ordered with lower values listed first." .

schema:ItemListOrderDescending a schema:ItemListOrderType ;
    rdfs:label "ItemListOrderDescending" ;
    rdfs:comment "An ItemList ordered with higher values listed first." .

schema:ItemListUnordered a schema:ItemListOrderType ;
    rdfs:label "ItemListUnordered" ;
    rdfs:comment "An ItemList ordered with no explicit order." .

schema:KosherDiet a schema:RestrictedDiet ;
    rdfs:label "KosherDiet" ;
    rdfs:comment "A diet conforming to Jewish dietary practices." .

schema:LaserDiscFormat a schema:MusicReleaseFormatType ;
    rdfs:label "LaserDiscFormat" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    rdfs:comment "LaserDiscFormat." .

schema:LeftHandDriving a schema:SteeringPositionValue ;
    rdfs:label "LeftHandDriving" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> ;
    rdfs:comment "The steering position is on the left side of the vehicle (viewed from the main direction of driving)." .

schema:LimitedAvailability a schema:ItemAvailability ;
    rdfs:label "LimitedAvailability" ;
    rdfs:comment "Indicates that the item has limited availability." .

schema:LiveAlbum a schema:MusicAlbumProductionType ;
    rdfs:label "LiveAlbum" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    rdfs:comment "LiveAlbum." .

schema:LowCalorieDiet a schema:RestrictedDiet ;
    rdfs:label "LowCalorieDiet" ;
    rdfs:comment "A diet focused on reduced calorie intake." .

schema:LowFatDiet a schema:RestrictedDiet ;
    rdfs:label "LowFatDiet" ;
    rdfs:comment "A diet focused on reduced fat and cholesterol intake." .

schema:LowLactoseDiet a schema:RestrictedDiet ;
    rdfs:label "LowLactoseDiet" ;
    rdfs:comment "A diet appropriate for people with lactose intolerance." .

schema:LowSaltDiet a schema:RestrictedDiet ;
    rdfs:label "LowSaltDiet" ;
    rdfs:comment "A diet focused on reduced sodium intake." .

schema:Male a schema:GenderType ;
    rdfs:label "Male" ;
    rdfs:comment "The male gender." .

schema:MixtapeAlbum a schema:MusicAlbumProductionType ;
    rdfs:label "MixtapeAlbum" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    rdfs:comment "MixtapeAlbum." .

schema:Monday a schema:DayOfWeek ;
    rdfs:label "Monday" ;
    schema:sameAs <http://www.wikidata.org/entity/Q105> ;
    rdfs:comment "The day of the week between Sunday and Tuesday." .

schema:MultiPlayer a schema:GamePlayMode ;
    rdfs:label "MultiPlayer" ;
    rdfs:comment "Play mode: MultiPlayer. Requiring or allowing multiple human players to play simultaneously." .

schema:NewCondition a schema:OfferItemCondition ;
    rdfs:label "NewCondition" ;
    rdfs:comment "Indicates that the item is new." .

schema:OfflinePermanently a schema:GameServerStatus ;
    rdfs:label "OfflinePermanently" ;
    rdfs:comment "Game server status: OfflinePermanently. Server is offline and not available." .

schema:OfflineTemporarily a schema:GameServerStatus ;
    rdfs:label "OfflineTemporarily" ;
    rdfs:comment "Game server status: OfflineTemporarily. Server is offline now but it can be online soon." .

schema:OnSitePickup a schema:DeliveryMethod ;
    rdfs:label "OnSitePickup" ;
    rdfs:comment "A DeliveryMethod in which an item is collected on site, e.g. in a store or at a box office." .

schema:Online a schema:GameServerStatus ;
    rdfs:label "Online" ;
    rdfs:comment "Game server status: Online. Server is available." .

schema:OnlineFull a schema:GameServerStatus ;
    rdfs:label "OnlineFull" ;
    rdfs:comment "Game server status: OnlineFull. Server is online but unavailable. The maximum number of players has reached." .

schema:OnlineOnly a schema:ItemAvailability ;
    rdfs:label "OnlineOnly" ;
    rdfs:comment "Indicates that the item is available only online." .

schema:OrderCancelled a schema:OrderStatus ;
    rdfs:label "OrderCancelled" ;
    rdfs:comment "OrderStatus representing cancellation of an order." .

schema:OrderDelivered a schema:OrderStatus ;
    rdfs:label "OrderDelivered" ;
    rdfs:comment "OrderStatus representing successful delivery of an order." .

schema:OrderInTransit a schema:OrderStatus ;
    rdfs:label "OrderInTransit" ;
    rdfs:comment "OrderStatus representing that an order is in transit." .

schema:OrderPaymentDue a schema:OrderStatus ;
    rdfs:label "OrderPaymentDue" ;
    rdfs:comment "OrderStatus representing that payment is due on an order." .

schema:OrderPickupAvailable a schema:OrderStatus ;
    rdfs:label "OrderPickupAvailable" ;
    rdfs:comment "OrderStatus representing availability of an order for pickup." .

schema:OrderProblem a schema:OrderStatus ;
    rdfs:label "OrderProblem" ;
    rdfs:comment "OrderStatus representing that there is a problem with the order." .

schema:OrderProcessing a schema:OrderStatus ;
    rdfs:label "OrderProcessing" ;
    rdfs:comment "OrderStatus representing that an order is being processed." .

schema:OrderReturned a schema:OrderStatus ;
    rdfs:label "OrderReturned" ;
    rdfs:comment "OrderStatus representing that an order has been returned." .

schema:OutOfStock a schema:ItemAvailability ;
    rdfs:label "OutOfStock" ;
    rdfs:comment "Indicates that the item is out of stock." .

schema:Paperback a schema:BookFormatType ;
    rdfs:label "Paperback" ;
    rdfs:comment "Book format: Paperback." .

schema:ParkingMap a schema:MapCategoryType ;
    rdfs:label "ParkingMap" ;
    rdfs:comment "A parking map." .

schema:PaymentAutomaticallyApplied a schema:PaymentStatusType ;
    rdfs:label "PaymentAutomaticallyApplied" ;
    rdfs:comment "An automatic payment system is in place and will be used." .

schema:PaymentComplete a schema:PaymentStatusType ;
    rdfs:label "PaymentComplete" ;
    rdfs:comment "The payment has been received and processed." .

schema:PaymentDeclined a schema:PaymentStatusType ;
    rdfs:label "PaymentDeclined" ;
    rdfs:comment "The payee received the payment, but it was declined for some reason." .

schema:PaymentDue a schema:PaymentStatusType ;
    rdfs:label "PaymentDue" ;
    rdfs:comment "The payment is due, but still within an acceptable time to be received." .

schema:PaymentPastDue a schema:PaymentStatusType ;
    rdfs:label "PaymentPastDue" ;
    rdfs:comment "The payment is due and considered late." .

schema:PotentialActionStatus a schema:ActionStatusType ;
    rdfs:label "PotentialActionStatus" ;
    rdfs:comment "A description of an action that is supported." .

schema:PreOrder a schema:ItemAvailability ;
    rdfs:label "PreOrder" ;
    rdfs:comment "Indicates that the item is available for pre-order, but will be delivered when generally available." .

schema:PreSale a schema:ItemAvailability ;
    rdfs:label "PreSale" ;
    rdfs:comment "Indicates that the item is available for ordering and delivery before general availability." .

schema:PublicHolidays a schema:DayOfWeek ;
    rdfs:label "PublicHolidays" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> ;
    rdfs:comment "This stands for any day that is a public holiday; it is a placeholder for all official public holidays in some particular location. While not technically a \"day of the week\", it can be used with <a class=\"localLink\" href=\"http://schema.org/OpeningHoursSpecification\">OpeningHoursSpecification</a>. In the context of an opening hours specification it can be used to indicate opening hours on public holidays, overriding general opening hours for the day of the week on which a public holiday occurs." .

schema:ReadPermission a schema:DigitalDocumentPermissionType ;
    rdfs:label "ReadPermission" ;
    rdfs:comment "Permission to read or view the document." .

schema:RearWheelDriveConfiguration a schema:DriveWheelConfigurationValue ;
    rdfs:label "RearWheelDriveConfiguration" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> ;
    rdfs:comment "Real-wheel drive is a transmission layout where the engine drives the rear wheels." .

schema:RefurbishedCondition a schema:OfferItemCondition ;
    rdfs:label "RefurbishedCondition" ;
    rdfs:comment "Indicates that the item is refurbished." .

schema:RemixAlbum a schema:MusicAlbumProductionType ;
    rdfs:label "RemixAlbum" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    rdfs:comment "RemixAlbum." .

schema:Researcher a schema:Audience ;
    rdfs:label "Researcher" ;
    rdfs:comment "Researchers." .

schema:ReservationCancelled a schema:ReservationStatusType ;
    rdfs:label "ReservationCancelled" ;
    rdfs:comment "The status for a previously confirmed reservation that is now cancelled." .

schema:ReservationConfirmed a schema:ReservationStatusType ;
    rdfs:label "ReservationConfirmed" ;
    rdfs:comment "The status of a confirmed reservation." .

schema:ReservationHold a schema:ReservationStatusType ;
    rdfs:label "ReservationHold" ;
    rdfs:comment "The status of a reservation on hold pending an update like credit card number or flight changes." .

schema:ReservationPending a schema:ReservationStatusType ;
    rdfs:label "ReservationPending" ;
    rdfs:comment "The status of a reservation when a request has been sent, but not confirmed." .

schema:RightHandDriving a schema:SteeringPositionValue ;
    rdfs:label "RightHandDriving" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> ;
    rdfs:comment "The steering position is on the right side of the vehicle (viewed from the main direction of driving)." .

schema:RsvpResponseMaybe a schema:RsvpResponseType ;
    rdfs:label "RsvpResponseMaybe" ;
    rdfs:comment "The invitee may or may not attend." .

schema:RsvpResponseNo a schema:RsvpResponseType ;
    rdfs:label "RsvpResponseNo" ;
    rdfs:comment "The invitee will not attend." .

schema:RsvpResponseYes a schema:RsvpResponseType ;
    rdfs:label "RsvpResponseYes" ;
    rdfs:comment "The invitee will attend." .

schema:Saturday a schema:DayOfWeek ;
    rdfs:label "Saturday" ;
    schema:sameAs <http://www.wikidata.org/entity/Q131> ;
    rdfs:comment "The day of the week between Friday and Sunday." .

schema:SeatingMap a schema:MapCategoryType ;
    rdfs:label "SeatingMap" ;
    rdfs:comment "A seating map." .

schema:SinglePlayer a schema:GamePlayMode ;
    rdfs:label "SinglePlayer" ;
    rdfs:comment "Play mode: SinglePlayer. Which is played by a lone player." .

schema:SingleRelease a schema:MusicAlbumReleaseType ;
    rdfs:label "SingleRelease" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    rdfs:comment "SingleRelease." .

schema:SoldOut a schema:ItemAvailability ;
    rdfs:label "SoldOut" ;
    rdfs:comment "Indicates that the item has sold out." .

schema:SoundtrackAlbum a schema:MusicAlbumProductionType ;
    rdfs:label "SoundtrackAlbum" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    rdfs:comment "SoundtrackAlbum." .

schema:SpokenWordAlbum a schema:MusicAlbumProductionType ;
    rdfs:label "SpokenWordAlbum" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    rdfs:comment "SpokenWordAlbum." .

schema:StudioAlbum a schema:MusicAlbumProductionType ;
    rdfs:label "StudioAlbum" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    rdfs:comment "StudioAlbum." .

schema:Sunday a schema:DayOfWeek ;
    rdfs:label "Sunday" ;
    schema:sameAs <http://www.wikidata.org/entity/Q132> ;
    rdfs:comment "The day of the week between Saturday and Monday." .

schema:Thursday a schema:DayOfWeek ;
    rdfs:label "Thursday" ;
    schema:sameAs <http://www.wikidata.org/entity/Q129> ;
    rdfs:comment "The day of the week between Wednesday and Friday." .

schema:TollFree a schema:ContactPointOption ;
    rdfs:label "TollFree" ;
    rdfs:comment "The associated telephone number is toll free." .

schema:TransitMap a schema:MapCategoryType ;
    rdfs:label "TransitMap" ;
    rdfs:comment "A transit map." .

schema:True a schema:Boolean ;
    rdfs:label "True" ;
    rdfs:comment "The boolean value true." .

schema:Tuesday a schema:DayOfWeek ;
    rdfs:label "Tuesday" ;
    schema:sameAs <http://www.wikidata.org/entity/Q127> ;
    rdfs:comment "The day of the week between Monday and Wednesday." .

schema:UsedCondition a schema:OfferItemCondition ;
    rdfs:label "UsedCondition" ;
    rdfs:comment "Indicates that the item is used." .

schema:VeganDiet a schema:RestrictedDiet ;
    rdfs:label "VeganDiet" ;
    rdfs:comment "A diet exclusive of all animal products." .

schema:VegetarianDiet a schema:RestrictedDiet ;
    rdfs:label "VegetarianDiet" ;
    rdfs:comment "A diet exclusive of animal meat." .

schema:VenueMap a schema:MapCategoryType ;
    rdfs:label "VenueMap" ;
    rdfs:comment "A venue map (e.g. for malls, auditoriums, museums, etc.)." .

schema:VinylFormat a schema:MusicReleaseFormatType ;
    rdfs:label "VinylFormat" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    rdfs:comment "VinylFormat." .

schema:Wednesday a schema:DayOfWeek ;
    rdfs:label "Wednesday" ;
    schema:sameAs <http://www.wikidata.org/entity/Q128> ;
    rdfs:comment "The day of the week between Tuesday and Thursday." .

schema:WritePermission a schema:DigitalDocumentPermissionType ;
    rdfs:label "WritePermission" ;
    rdfs:comment "Permission to write or edit the document." .

schema:ZoneBoardingPolicy a schema:BoardingPolicyType ;
    rdfs:label "ZoneBoardingPolicy" ;
    rdfs:comment "The airline boards by zones of the plane." .

schema:acceptedAnswer a rdf:Property ;
    rdfs:label "acceptedAnswer" ;
    schema:domainIncludes schema:Question ;
    schema:rangeIncludes schema:Answer,
        schema:ItemList ;
    rdfs:comment "The answer(s) that has been accepted as best, typically on a Question/Answer site. Sites vary in their selection mechanisms, e.g. drawing on community opinion and/or the view of the Question author." ;
    rdfs:subPropertyOf schema:suggestedAnswer .

schema:acceptedOffer a rdf:Property ;
    rdfs:label "acceptedOffer" ;
    schema:domainIncludes schema:Order ;
    schema:rangeIncludes schema:Offer ;
    rdfs:comment "The offer(s) -- e.g., product, quantity and price combinations -- included in the order." .

schema:acceptedPaymentMethod a rdf:Property ;
    rdfs:label "acceptedPaymentMethod" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Demand,
        schema:Offer ;
    schema:rangeIncludes schema:LoanOrCredit,
        schema:PaymentMethod ;
    rdfs:comment "The payment method(s) accepted by seller for this offer." .

schema:acceptsReservations a rdf:Property ;
    rdfs:label "acceptsReservations" ;
    schema:domainIncludes schema:FoodEstablishment ;
    schema:rangeIncludes schema:Boolean,
        schema:Text,
        schema:URL ;
    rdfs:comment "Indicates whether a FoodEstablishment accepts reservations. Values can be Boolean, an URL at which reservations can be made or (for backwards compatibility) the strings <code>Yes</code> or <code>No</code>." .

schema:accessCode a rdf:Property ;
    rdfs:label "accessCode" ;
    schema:domainIncludes schema:DeliveryEvent ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Password, PIN, or access code needed for delivery (e.g. from a locker)." .

schema:accessMode a rdf:Property ;
    rdfs:label "accessMode" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1100> ;
    schema:category "issue-1110" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The human sensory perceptual system or cognitive faculty through which a person may process or perceive information. Expected values include: auditory, tactile, textual, visual, colorDependent, chartOnVisual, chemOnVisual, diagramOnVisual, mathOnVisual, musicOnVisual, textOnVisual." .

schema:accessModeSufficient a rdf:Property ;
    rdfs:label "accessModeSufficient" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1100> ;
    schema:category "issue-1110" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "A list of single or combined accessModes that are sufficient to understand all the intellectual content of a resource. Expected values include:  auditory, tactile, textual, visual." .

schema:accessibilityAPI a rdf:Property ;
    rdfs:label "accessibilityAPI" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Indicates that the resource is compatible with the referenced accessibility API (<a href=\"http://www.w3.org/wiki/WebSchemas/Accessibility\">WebSchemas wiki lists possible values</a>)." .

schema:accessibilityControl a rdf:Property ;
    rdfs:label "accessibilityControl" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Identifies input methods that are sufficient to fully control the described resource (<a href=\"http://www.w3.org/wiki/WebSchemas/Accessibility\">WebSchemas wiki lists possible values</a>)." .

schema:accessibilityFeature a rdf:Property ;
    rdfs:label "accessibilityFeature" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Content features of the resource, such as accessible media, alternatives and supported enhancements for accessibility (<a href=\"http://www.w3.org/wiki/WebSchemas/Accessibility\">WebSchemas wiki lists possible values</a>)." .

schema:accessibilityHazard a rdf:Property ;
    rdfs:label "accessibilityHazard" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "A characteristic of the described resource that is physiologically dangerous to some users. Related to WCAG 2.0 guideline 2.3 (<a href=\"http://www.w3.org/wiki/WebSchemas/Accessibility\">WebSchemas wiki lists possible values</a>)." .

schema:accessibilitySummary a rdf:Property ;
    rdfs:label "accessibilitySummary" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1100> ;
    schema:category "issue-1110" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "A human-readable summary of specific accessibility features or deficiencies, consistent with the other accessibility metadata but expressing subtleties such as \"short descriptions are present but long descriptions will be needed for non-visual users\" or \"short descriptions are present and no long descriptions are needed.\"" .

schema:accountId a rdf:Property ;
    rdfs:label "accountId" ;
    schema:domainIncludes schema:Invoice ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The identifier for the account the payment will be applied to." ;
    rdfs:subPropertyOf schema:identifier .

schema:accountablePerson a rdf:Property ;
    rdfs:label "accountablePerson" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Person ;
    rdfs:comment "Specifies the Person that is legally accountable for the CreativeWork." .

schema:acquiredFrom a rdf:Property ;
    rdfs:label "acquiredFrom" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:OwnershipInfo ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    rdfs:comment "The organization or person from which the product was acquired." .

schema:actionAccessibilityRequirement a rdf:Property ;
    rdfs:label "actionAccessibilityRequirement" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1741> ;
    schema:category "issue-1741" ;
    schema:domainIncludes schema:ConsumeAction ;
    schema:rangeIncludes schema:ActionAccessSpecification ;
    rdfs:comment "A set of requirements that a must be fulfilled in order to perform an Action. If more than one value is specied, fulfilling one set of requirements will allow the Action to be performed." .

schema:actionPlatform a rdf:Property ;
    rdfs:label "actionPlatform" ;
    schema:domainIncludes schema:EntryPoint ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    rdfs:comment "The high level platform(s) where the Action can be performed for the given URL. To specify a specific application or operating system instance, use actionApplication." .

schema:actionStatus a rdf:Property ;
    rdfs:label "actionStatus" ;
    schema:domainIncludes schema:Action ;
    schema:rangeIncludes schema:ActionStatusType ;
    rdfs:comment "Indicates the current disposition of the Action." .

schema:actors a rdf:Property ;
    rdfs:label "actors" ;
    schema:domainIncludes schema:Clip,
        schema:Episode,
        schema:Movie,
        schema:MovieSeries,
        schema:RadioSeries,
        schema:TVSeries,
        schema:VideoGame,
        schema:VideoGameSeries,
        schema:VideoObject ;
    schema:rangeIncludes schema:Person ;
    schema:supersededBy schema:actor ;
    rdfs:comment "An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip." .

schema:addOn a rdf:Property ;
    rdfs:label "addOn" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Offer ;
    schema:rangeIncludes schema:Offer ;
    rdfs:comment "An additional offer that can only be obtained in combination with the first base offer (e.g. supplements and extensions that are available for a surcharge)." .

schema:additionalName a rdf:Property ;
    rdfs:label "additionalName" ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "An additional name for a Person, can be used for a middle name." .

schema:additionalNumberOfGuests a rdf:Property ;
    rdfs:label "additionalNumberOfGuests" ;
    schema:domainIncludes schema:RsvpAction ;
    schema:rangeIncludes schema:Number ;
    rdfs:comment "If responding yes, the number of guests who will attend in addition to the invitee." .

schema:additionalProperty a rdf:Property ;
    rdfs:label "additionalProperty" ;
    schema:domainIncludes schema:Place,
        schema:Product,
        schema:QualitativeValue,
        schema:QuantitativeValue ;
    schema:rangeIncludes schema:PropertyValue ;
    rdfs:comment """A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.<br/><br/>

Note: Publishers should be aware that applications designed to use specific schema.org properties (e.g. http://schema.org/width, http://schema.org/color, http://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.""" .

schema:additionalType a rdf:Property ;
    rdfs:label "additionalType" ;
    schema:domainIncludes schema:Thing ;
    schema:rangeIncludes schema:URL ;
    rdfs:comment "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally." ;
    rdfs:subPropertyOf rdf:type .

schema:address a rdf:Property ;
    rdfs:label "address" ;
    schema:domainIncludes schema:GeoCoordinates,
        schema:GeoShape,
        schema:Organization,
        schema:Person,
        schema:Place ;
    schema:rangeIncludes schema:PostalAddress,
        schema:Text ;
    rdfs:comment "Physical address of the item." .

schema:addressCountry a rdf:Property ;
    rdfs:label "addressCountry" ;
    schema:domainIncludes schema:GeoCoordinates,
        schema:GeoShape,
        schema:PostalAddress ;
    schema:rangeIncludes schema:Country,
        schema:Text ;
    rdfs:comment "The country. For example, USA. You can also provide the two-letter <a href=\"http://en.wikipedia.org/wiki/ISO_3166-1\">ISO 3166-1 alpha-2 country code</a>." .

schema:addressLocality a rdf:Property ;
    rdfs:label "addressLocality" ;
    schema:domainIncludes schema:PostalAddress ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The locality in which the street address is, and which is in the region. For example, Mountain View." .

schema:addressRegion a rdf:Property ;
    rdfs:label "addressRegion" ;
    schema:domainIncludes schema:PostalAddress ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The region in which the locality is, and which is in the country. For example, California or another appropriate first-level <a href=\"https://en.wikipedia.org/wiki/List_of_administrative_divisions_by_country\">Administrative division</a>" .

schema:advanceBookingRequirement a rdf:Property ;
    rdfs:label "advanceBookingRequirement" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Demand,
        schema:Offer ;
    schema:rangeIncludes schema:QuantitativeValue ;
    rdfs:comment "The amount of time that is required between accepting the offer and the actual usage of the resource or service." .

schema:affiliation a rdf:Property ;
    rdfs:label "affiliation" ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Organization ;
    rdfs:comment "An organization that this person is affiliated with. For example, a school/university, a club, or a team." ;
    rdfs:subPropertyOf schema:memberOf .

schema:afterMedia a rdf:Property ;
    rdfs:label "afterMedia" ;
    schema:domainIncludes schema:HowToDirection ;
    schema:rangeIncludes schema:MediaObject,
        schema:URL ;
    rdfs:comment "A media object representing the circumstances after performing this direction." .

schema:agent a rdf:Property ;
    rdfs:label "agent" ;
    schema:domainIncludes schema:Action ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    rdfs:comment "The direct performer or driver of the action (animate or inanimate). e.g. <em>John</em> wrote a book." .

schema:aggregateRating a rdf:Property ;
    rdfs:label "aggregateRating" ;
    schema:domainIncludes schema:Brand,
        schema:CreativeWork,
        schema:Event,
        schema:Offer,
        schema:Organization,
        schema:Place,
        schema:Product,
        schema:Service ;
    schema:rangeIncludes schema:AggregateRating ;
    rdfs:comment "The overall rating, based on a collection of reviews or ratings, of the item." .

schema:aircraft a rdf:Property ;
    rdfs:label "aircraft" ;
    schema:domainIncludes schema:Flight ;
    schema:rangeIncludes schema:Text,
        schema:Vehicle ;
    rdfs:comment "The kind of aircraft (e.g., \"Boeing 747\")." .

schema:albumProductionType a rdf:Property ;
    rdfs:label "albumProductionType" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    schema:domainIncludes schema:MusicAlbum ;
    schema:rangeIncludes schema:MusicAlbumProductionType ;
    rdfs:comment "Classification of the album by it's type of content: soundtrack, live album, studio album, etc." .

schema:albumReleaseType a rdf:Property ;
    rdfs:label "albumReleaseType" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    schema:domainIncludes schema:MusicAlbum ;
    schema:rangeIncludes schema:MusicAlbumReleaseType ;
    rdfs:comment "The kind of release which this album is: single, EP or album." .

schema:albums a rdf:Property ;
    rdfs:label "albums" ;
    schema:domainIncludes schema:MusicGroup ;
    schema:rangeIncludes schema:MusicAlbum ;
    schema:supersededBy schema:album ;
    rdfs:comment "A collection of music albums." .

schema:alignmentType a rdf:Property ;
    rdfs:label "alignmentType" ;
    schema:domainIncludes schema:AlignmentObject ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "A category of alignment between the learning resource and the framework node. Recommended values include: 'assesses', 'teaches', 'requires', 'textComplexity', 'readingLevel', 'educationalSubject', and 'educationalLevel'." .

schema:alternateName a rdf:Property ;
    rdfs:label "alternateName" ;
    schema:domainIncludes schema:Thing ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "An alias for the item." .

schema:alternativeHeadline a rdf:Property ;
    rdfs:label "alternativeHeadline" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "A secondary title of the CreativeWork." .

schema:amenityFeature a rdf:Property ;
    rdfs:label "amenityFeature" ;
    dct:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> ;
    schema:domainIncludes schema:Accommodation,
        schema:LodgingBusiness,
        schema:Place ;
    schema:rangeIncludes schema:LocationFeatureSpecification ;
    rdfs:comment "An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs." .

schema:amount a rdf:Property ;
    rdfs:label "amount" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1253>,
        <https://github.com/schemaorg/schemaorg/issues/1698> ;
    schema:category "issue-1253",
        "issue-1698" ;
    schema:domainIncludes schema:DatedMoneySpecification,
        schema:InvestmentOrDeposit,
        schema:LoanOrCredit,
        schema:MonetaryGrant,
        schema:MoneyTransfer ;
    schema:rangeIncludes schema:MonetaryAmount,
        schema:Number ;
    rdfs:comment "The amount of money." .

schema:amountOfThisGood a rdf:Property ;
    rdfs:label "amountOfThisGood" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:TypeAndQuantityNode ;
    schema:rangeIncludes schema:Number ;
    rdfs:comment "The quantity of the goods included in the offer." .

schema:annualPercentageRate a rdf:Property ;
    rdfs:label "annualPercentageRate" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO> ;
    schema:domainIncludes schema:FinancialProduct ;
    schema:rangeIncludes schema:Number,
        schema:QuantitativeValue ;
    rdfs:comment "The annual rate that is charged for borrowing (or made by investing), expressed as a single percentage number that represents the actual yearly cost of funds over the term of a loan. This includes any fees or additional costs associated with the transaction." .

schema:answerCount a rdf:Property ;
    rdfs:label "answerCount" ;
    schema:domainIncludes schema:Question ;
    schema:rangeIncludes schema:Integer ;
    rdfs:comment "The number of answers this question has received." .

schema:application a rdf:Property ;
    rdfs:label "application" ;
    schema:domainIncludes schema:EntryPoint ;
    schema:rangeIncludes schema:SoftwareApplication ;
    schema:supersededBy schema:actionApplication ;
    rdfs:comment "An application that can complete the request." .

schema:applicationCategory a rdf:Property ;
    rdfs:label "applicationCategory" ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    rdfs:comment "Type of software application, e.g. 'Game, Multimedia'." .

schema:applicationSubCategory a rdf:Property ;
    rdfs:label "applicationSubCategory" ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    rdfs:comment "Subcategory of the application, e.g. 'Arcade Game'." .

schema:applicationSuite a rdf:Property ;
    rdfs:label "applicationSuite" ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The name of the application suite to which the application belongs (e.g. Excel belongs to Office)." .

schema:appliesToDeliveryMethod a rdf:Property ;
    rdfs:label "appliesToDeliveryMethod" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:DeliveryChargeSpecification,
        schema:PaymentChargeSpecification ;
    schema:rangeIncludes schema:DeliveryMethod ;
    rdfs:comment "The delivery method(s) to which the delivery charge or payment charge specification applies." .

schema:appliesToPaymentMethod a rdf:Property ;
    rdfs:label "appliesToPaymentMethod" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:PaymentChargeSpecification ;
    schema:rangeIncludes schema:PaymentMethod ;
    rdfs:comment "The payment method(s) to which the payment charge specification applies." .

schema:area a rdf:Property ;
    rdfs:label "area" ;
    schema:domainIncludes schema:BroadcastService ;
    schema:rangeIncludes schema:Place ;
    schema:supersededBy schema:serviceArea ;
    rdfs:comment "The area within which users can expect to reach the broadcast service." .

schema:arrivalAirport a rdf:Property ;
    rdfs:label "arrivalAirport" ;
    schema:domainIncludes schema:Flight ;
    schema:rangeIncludes schema:Airport ;
    rdfs:comment "The airport where the flight terminates." .

schema:arrivalBusStop a rdf:Property ;
    rdfs:label "arrivalBusStop" ;
    schema:domainIncludes schema:BusTrip ;
    schema:rangeIncludes schema:BusStation,
        schema:BusStop ;
    rdfs:comment "The stop or station from which the bus arrives." .

schema:arrivalGate a rdf:Property ;
    rdfs:label "arrivalGate" ;
    schema:domainIncludes schema:Flight ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Identifier of the flight's arrival gate." .

schema:arrivalPlatform a rdf:Property ;
    rdfs:label "arrivalPlatform" ;
    schema:domainIncludes schema:TrainTrip ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The platform where the train arrives." .

schema:arrivalStation a rdf:Property ;
    rdfs:label "arrivalStation" ;
    schema:domainIncludes schema:TrainTrip ;
    schema:rangeIncludes schema:TrainStation ;
    rdfs:comment "The station where the train trip ends." .

schema:arrivalTerminal a rdf:Property ;
    rdfs:label "arrivalTerminal" ;
    schema:domainIncludes schema:Flight ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Identifier of the flight's arrival terminal." .

schema:arrivalTime a rdf:Property ;
    rdfs:label "arrivalTime" ;
    schema:domainIncludes schema:Trip ;
    schema:rangeIncludes schema:DateTime ;
    rdfs:comment "The expected arrival time." .

schema:artEdition a rdf:Property ;
    rdfs:label "artEdition" ;
    schema:domainIncludes schema:VisualArtwork ;
    schema:rangeIncludes schema:Integer,
        schema:Text ;
    rdfs:comment "The number of copies when multiple copies of a piece of artwork are produced - e.g. for a limited edition of 20 prints, 'artEdition' refers to the total number of copies (in this example \"20\")." .

schema:artMedium a rdf:Property ;
    rdfs:label "artMedium" ;
    schema:domainIncludes schema:VisualArtwork ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    rdfs:comment "The material used. (e.g. Oil, Watercolour, Acrylic, Linoprint, Marble, Cyanotype, Digital, Lithograph, DryPoint, Intaglio, Pastel, Woodcut, Pencil, Mixed Media, etc.)" ;
    rdfs:subPropertyOf schema:material .

schema:artform a rdf:Property ;
    rdfs:label "artform" ;
    schema:domainIncludes schema:VisualArtwork ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    rdfs:comment "e.g. Painting, Drawing, Sculpture, Print, Photograph, Assemblage, Collage, etc." .

schema:articleBody a rdf:Property ;
    rdfs:label "articleBody" ;
    schema:domainIncludes schema:Article ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The actual body of the article." .

schema:articleSection a rdf:Property ;
    rdfs:label "articleSection" ;
    schema:domainIncludes schema:Article ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Articles may belong to one or more 'sections' in a magazine or newspaper, such as Sports, Lifestyle, etc." .

schema:assembly a rdf:Property ;
    rdfs:label "assembly" ;
    schema:domainIncludes schema:APIReference ;
    schema:rangeIncludes schema:Text ;
    schema:supersededBy schema:executableLibraryName ;
    rdfs:comment "Library file name e.g., mscorlib.dll, system.web.dll." .

schema:assemblyVersion a rdf:Property ;
    rdfs:label "assemblyVersion" ;
    schema:domainIncludes schema:APIReference ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Associated product/technology version. e.g., .NET Framework 4.5." .

schema:associatedArticle a rdf:Property ;
    rdfs:label "associatedArticle" ;
    schema:domainIncludes schema:MediaObject ;
    schema:rangeIncludes schema:NewsArticle ;
    rdfs:comment "A NewsArticle associated with the Media Object." .

schema:associatedMedia a rdf:Property ;
    rdfs:label "associatedMedia" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:MediaObject ;
    rdfs:comment "A media object that encodes this CreativeWork. This property is a synonym for encoding." .

schema:athlete a rdf:Property ;
    rdfs:label "athlete" ;
    schema:domainIncludes schema:SportsTeam ;
    schema:rangeIncludes schema:Person ;
    rdfs:comment "A person that acts as performing member of a sports team; a player as opposed to a coach." .

schema:attendees a rdf:Property ;
    rdfs:label "attendees" ;
    schema:domainIncludes schema:Event ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    schema:supersededBy schema:attendee ;
    rdfs:comment "A person attending the event." .

schema:audienceType a rdf:Property ;
    rdfs:label "audienceType" ;
    schema:domainIncludes schema:Audience ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The target group associated with a given audience (e.g. veterans, car owners, musicians, etc.)." .

schema:audio a rdf:Property ;
    rdfs:label "audio" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:AudioObject,
        schema:Clip ;
    rdfs:comment "An embedded audio object." .

schema:authenticator a rdf:Property ;
    rdfs:label "authenticator" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1741> ;
    schema:category "issue-1741" ;
    schema:domainIncludes schema:MediaSubscription ;
    schema:rangeIncludes schema:Organization ;
    rdfs:comment "The Organization responsible for authenticating the user's subscription. For example, many media apps require a cable/satellite provider to authenticate your subscription before playing media." .

schema:author a rdf:Property ;
    rdfs:label "author" ;
    schema:domainIncludes schema:CreativeWork,
        schema:Rating ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    rdfs:comment "The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably." .

schema:availability a rdf:Property ;
    rdfs:label "availability" ;
    schema:domainIncludes schema:Demand,
        schema:Offer ;
    schema:rangeIncludes schema:ItemAvailability ;
    rdfs:comment "The availability of this item&#x2014;for example In stock, Out of stock, Pre-order, etc." .

schema:availabilityEnds a rdf:Property ;
    rdfs:label "availabilityEnds" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms>,
        <https://github.com/schemaorg/schemaorg/issues/1741> ;
    schema:category "issue-1741" ;
    schema:domainIncludes schema:ActionAccessSpecification,
        schema:Demand,
        schema:Offer ;
    schema:rangeIncludes schema:DateTime ;
    rdfs:comment "The end of the availability of the product or service included in the offer." .

schema:availabilityStarts a rdf:Property ;
    rdfs:label "availabilityStarts" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms>,
        <https://github.com/schemaorg/schemaorg/issues/1741> ;
    schema:category "issue-1741" ;
    schema:domainIncludes schema:ActionAccessSpecification,
        schema:Demand,
        schema:Offer ;
    schema:rangeIncludes schema:DateTime ;
    rdfs:comment "The beginning of the availability of the product or service included in the offer." .

schema:availableAtOrFrom a rdf:Property ;
    rdfs:label "availableAtOrFrom" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Demand,
        schema:Offer ;
    schema:rangeIncludes schema:Place ;
    rdfs:comment "The place(s) from which the offer can be obtained (e.g. store locations)." ;
    rdfs:subPropertyOf schema:areaServed .

schema:availableChannel a rdf:Property ;
    rdfs:label "availableChannel" ;
    schema:domainIncludes schema:Service ;
    schema:rangeIncludes schema:ServiceChannel ;
    rdfs:comment "A means of accessing the service (e.g. a phone bank, a web site, a location, etc.)." .

schema:availableDeliveryMethod a rdf:Property ;
    rdfs:label "availableDeliveryMethod" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Demand,
        schema:Offer ;
    schema:rangeIncludes schema:DeliveryMethod ;
    rdfs:comment "The delivery method(s) available for this offer." .

schema:availableFrom a rdf:Property ;
    rdfs:label "availableFrom" ;
    schema:domainIncludes schema:DeliveryEvent ;
    schema:rangeIncludes schema:DateTime ;
    rdfs:comment "When the item is available for pickup from the store, locker, etc." .

schema:availableLanguage a rdf:Property ;
    rdfs:label "availableLanguage" ;
    schema:domainIncludes schema:ContactPoint,
        schema:LodgingBusiness,
        schema:ServiceChannel,
        schema:TouristAttraction ;
    schema:rangeIncludes schema:Language,
        schema:Text ;
    rdfs:comment "A language someone may use with or at the item, service or place. Please use one of the language codes from the <a href=\"http://tools.ietf.org/html/bcp47\">IETF BCP 47 standard</a>. See also <a class=\"localLink\" href=\"http://schema.org/inLanguage\">inLanguage</a>" .

schema:availableThrough a rdf:Property ;
    rdfs:label "availableThrough" ;
    schema:domainIncludes schema:DeliveryEvent ;
    schema:rangeIncludes schema:DateTime ;
    rdfs:comment "After this date, the item will no longer be available for pickup." .

schema:awards a rdf:Property ;
    rdfs:label "awards" ;
    schema:domainIncludes schema:CreativeWork,
        schema:Organization,
        schema:Person,
        schema:Product ;
    schema:rangeIncludes schema:Text ;
    schema:supersededBy schema:award ;
    rdfs:comment "Awards won by or for this item." .

schema:awayTeam a rdf:Property ;
    rdfs:label "awayTeam" ;
    schema:domainIncludes schema:SportsEvent ;
    schema:rangeIncludes schema:Person,
        schema:SportsTeam ;
    rdfs:comment "The away team in a sports event." ;
    rdfs:subPropertyOf schema:competitor .

schema:baseSalary a rdf:Property ;
    rdfs:label "baseSalary" ;
    schema:domainIncludes schema:EmployeeRole,
        schema:JobPosting ;
    schema:rangeIncludes schema:MonetaryAmount,
        schema:Number,
        schema:PriceSpecification ;
    rdfs:comment "The base salary of the job or of an employee in an EmployeeRole." .

schema:bccRecipient a rdf:Property ;
    rdfs:label "bccRecipient" ;
    schema:domainIncludes schema:Message ;
    schema:rangeIncludes schema:ContactPoint,
        schema:Organization,
        schema:Person ;
    rdfs:comment "A sub property of recipient. The recipient blind copied on a message." ;
    rdfs:subPropertyOf schema:recipient .

schema:bed a rdf:Property ;
    rdfs:label "bed" ;
    dct:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> ;
    schema:domainIncludes schema:HotelRoom,
        schema:Suite ;
    schema:rangeIncludes schema:BedDetails,
        schema:BedType,
        schema:Text ;
    rdfs:comment """The type of bed or beds included in the accommodation. For the single case of just one bed of a certain type, you use bed directly with a text.
      If you want to indicate the quantity of a certain kind of bed, use an instance of BedDetails. For more detailed information, use the amenityFeature property.""" .

schema:beforeMedia a rdf:Property ;
    rdfs:label "beforeMedia" ;
    schema:domainIncludes schema:HowToDirection ;
    schema:rangeIncludes schema:MediaObject,
        schema:URL ;
    rdfs:comment "A media object representing the circumstances before performing this direction." .

schema:benefits a rdf:Property ;
    rdfs:label "benefits" ;
    schema:domainIncludes schema:JobPosting ;
    schema:rangeIncludes schema:Text ;
    schema:supersededBy schema:jobBenefits ;
    rdfs:comment "Description of benefits associated with the job." .

schema:bestRating a rdf:Property ;
    rdfs:label "bestRating" ;
    schema:domainIncludes schema:Rating ;
    schema:rangeIncludes schema:Number,
        schema:Text ;
    rdfs:comment "The highest value allowed in this rating system. If bestRating is omitted, 5 is assumed." .

schema:billingAddress a rdf:Property ;
    rdfs:label "billingAddress" ;
    schema:domainIncludes schema:Order ;
    schema:rangeIncludes schema:PostalAddress ;
    rdfs:comment "The billing address for the order." .

schema:billingIncrement a rdf:Property ;
    rdfs:label "billingIncrement" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:UnitPriceSpecification ;
    schema:rangeIncludes schema:Number ;
    rdfs:comment "This property specifies the minimal quantity and rounding increment that will be the basis for the billing. The unit of measurement is specified by the unitCode property." .

schema:billingPeriod a rdf:Property ;
    rdfs:label "billingPeriod" ;
    schema:domainIncludes schema:Invoice ;
    schema:rangeIncludes schema:Duration ;
    rdfs:comment "The time interval used to compute the invoice." .

schema:birthDate a rdf:Property ;
    rdfs:label "birthDate" ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Date ;
    rdfs:comment "Date of birth." .

schema:birthPlace a rdf:Property ;
    rdfs:label "birthPlace" ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Place ;
    rdfs:comment "The place where the person was born." .

schema:bitrate a rdf:Property ;
    rdfs:label "bitrate" ;
    schema:domainIncludes schema:MediaObject ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The bitrate of the media object." .

schema:blogPosts a rdf:Property ;
    rdfs:label "blogPosts" ;
    schema:domainIncludes schema:Blog ;
    schema:rangeIncludes schema:BlogPosting ;
    schema:supersededBy schema:blogPost ;
    rdfs:comment "The postings that are part of this blog." .

schema:boardingGroup a rdf:Property ;
    rdfs:label "boardingGroup" ;
    schema:domainIncludes schema:FlightReservation ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The airline-specific indicator of boarding order / preference." .

schema:boardingPolicy a rdf:Property ;
    rdfs:label "boardingPolicy" ;
    schema:domainIncludes schema:Airline,
        schema:Flight ;
    schema:rangeIncludes schema:BoardingPolicyType ;
    rdfs:comment "The type of boarding policy used by the airline (e.g. zone-based or group-based)." .

schema:bookEdition a rdf:Property ;
    rdfs:label "bookEdition" ;
    schema:domainIncludes schema:Book ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The edition of the book." .

schema:bookFormat a rdf:Property ;
    rdfs:label "bookFormat" ;
    schema:domainIncludes schema:Book ;
    schema:rangeIncludes schema:BookFormatType ;
    rdfs:comment "The format of the book." .

schema:bookingAgent a rdf:Property ;
    rdfs:label "bookingAgent" ;
    schema:domainIncludes schema:Reservation ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    schema:supersededBy schema:broker ;
    rdfs:comment "'bookingAgent' is an out-dated term indicating a 'broker' that serves as a booking agent." .

schema:bookingTime a rdf:Property ;
    rdfs:label "bookingTime" ;
    schema:domainIncludes schema:Reservation ;
    schema:rangeIncludes schema:DateTime ;
    rdfs:comment "The date and time the reservation was booked." .

schema:borrower a rdf:Property ;
    rdfs:label "borrower" ;
    schema:domainIncludes schema:LendAction ;
    schema:rangeIncludes schema:Person ;
    rdfs:comment "A sub property of participant. The person that borrows the object being lent." ;
    rdfs:subPropertyOf schema:participant .

schema:box a rdf:Property ;
    rdfs:label "box" ;
    schema:domainIncludes schema:GeoShape ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "A box is the area enclosed by the rectangle formed by two points. The first point is the lower corner, the second point is the upper corner. A box is expressed as two points separated by a space character." .

schema:branchCode a rdf:Property ;
    rdfs:label "branchCode" ;
    schema:domainIncludes schema:Place ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment """A short textual code (also called "store code") that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.<br/><br/>

For example, in the URL http://www.starbucks.co.uk/store-locator/etc/detail/3047 the code "3047" is a branchCode for a particular branch.""" .

schema:branchOf a rdf:Property ;
    rdfs:label "branchOf" ;
    schema:domainIncludes schema:LocalBusiness ;
    schema:rangeIncludes schema:Organization ;
    schema:supersededBy schema:parentOrganization ;
    rdfs:comment "The larger organization that this local business is a branch of, if any. Not to be confused with (anatomical)<a class=\"localLink\" href=\"http://schema.org/branch\">branch</a>." .

schema:brand a rdf:Property ;
    rdfs:label "brand" ;
    schema:domainIncludes schema:Organization,
        schema:Person,
        schema:Product,
        schema:Service ;
    schema:rangeIncludes schema:Brand,
        schema:Organization ;
    rdfs:comment "The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person." .

schema:breadcrumb a rdf:Property ;
    rdfs:label "breadcrumb" ;
    schema:domainIncludes schema:WebPage ;
    schema:rangeIncludes schema:BreadcrumbList,
        schema:Text ;
    rdfs:comment "A set of links that can help a user understand and navigate a website hierarchy." .

schema:broadcastAffiliateOf a rdf:Property ;
    rdfs:label "broadcastAffiliateOf" ;
    schema:domainIncludes schema:BroadcastService ;
    schema:rangeIncludes schema:Organization ;
    rdfs:comment "The media network(s) whose content is broadcast on this station." .

schema:broadcastChannelId a rdf:Property ;
    rdfs:label "broadcastChannelId" ;
    schema:domainIncludes schema:BroadcastChannel ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The unique address by which the BroadcastService can be identified in a provider lineup. In US, this is typically a number." .

schema:broadcastDisplayName a rdf:Property ;
    rdfs:label "broadcastDisplayName" ;
    schema:domainIncludes schema:BroadcastService ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The name displayed in the channel guide. For many US affiliates, it is the network name." .

schema:broadcastFrequency a rdf:Property ;
    rdfs:label "broadcastFrequency" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1004> ;
    schema:category "issue-1004" ;
    schema:domainIncludes schema:BroadcastChannel,
        schema:BroadcastService ;
    schema:rangeIncludes schema:BroadcastFrequencySpecification,
        schema:Text ;
    rdfs:comment "The frequency used for over-the-air broadcasts. Numeric values or simple ranges e.g. 87-99. In addition a shortcut idiom is supported for frequences of AM and FM radio channels, e.g. \"87 FM\"." .

schema:broadcastFrequencyValue a rdf:Property ;
    rdfs:label "broadcastFrequencyValue" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1004> ;
    schema:category "issue-1004" ;
    schema:domainIncludes schema:BroadcastFrequencySpecification ;
    schema:rangeIncludes schema:Number,
        schema:QuantitativeValue ;
    rdfs:comment "The frequency in MHz for a particular broadcast." .

schema:broadcastOfEvent a rdf:Property ;
    rdfs:label "broadcastOfEvent" ;
    schema:domainIncludes schema:BroadcastEvent ;
    schema:rangeIncludes schema:Event ;
    rdfs:comment "The event being broadcast such as a sporting event or awards ceremony." .

schema:broadcastServiceTier a rdf:Property ;
    rdfs:label "broadcastServiceTier" ;
    schema:domainIncludes schema:BroadcastChannel ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The type of service required to have access to the channel (e.g. Standard or Premium)." .

schema:broadcastTimezone a rdf:Property ;
    rdfs:label "broadcastTimezone" ;
    schema:domainIncludes schema:BroadcastService ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The timezone in <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 format</a> for which the service bases its broadcasts" .

schema:broadcaster a rdf:Property ;
    rdfs:label "broadcaster" ;
    schema:domainIncludes schema:BroadcastService ;
    schema:rangeIncludes schema:Organization ;
    rdfs:comment "The organization owning or operating the broadcast service." .

schema:browserRequirements a rdf:Property ;
    rdfs:label "browserRequirements" ;
    schema:domainIncludes schema:WebApplication ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Specifies browser requirements in human-readable text. For example, 'requires HTML5 support'." .

schema:busName a rdf:Property ;
    rdfs:label "busName" ;
    schema:domainIncludes schema:BusTrip ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The name of the bus (e.g. Bolt Express)." .

schema:busNumber a rdf:Property ;
    rdfs:label "busNumber" ;
    schema:domainIncludes schema:BusTrip ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The unique identifier for the bus." .

schema:businessFunction a rdf:Property ;
    rdfs:label "businessFunction" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Demand,
        schema:Offer,
        schema:TypeAndQuantityNode ;
    schema:rangeIncludes schema:BusinessFunction ;
    rdfs:comment "The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell." .

schema:buyer a rdf:Property ;
    rdfs:label "buyer" ;
    schema:domainIncludes schema:SellAction ;
    schema:rangeIncludes schema:Person ;
    rdfs:comment "A sub property of participant. The participant/person/organization that bought the object." ;
    rdfs:subPropertyOf schema:participant .

schema:byArtist a rdf:Property ;
    rdfs:label "byArtist" ;
    schema:domainIncludes schema:MusicAlbum,
        schema:MusicRecording ;
    schema:rangeIncludes schema:MusicGroup,
        schema:Person ;
    rdfs:comment "The artist that performed this album or recording." .

schema:calories a rdf:Property ;
    rdfs:label "calories" ;
    schema:domainIncludes schema:NutritionInformation ;
    schema:rangeIncludes schema:Energy ;
    rdfs:comment "The number of calories." .

schema:candidate a rdf:Property ;
    rdfs:label "candidate" ;
    schema:domainIncludes schema:VoteAction ;
    schema:rangeIncludes schema:Person ;
    rdfs:comment "A sub property of object. The candidate subject of this action." ;
    rdfs:subPropertyOf schema:object .

schema:caption a rdf:Property ;
    rdfs:label "caption" ;
    schema:domainIncludes schema:AudioObject,
        schema:ImageObject,
        schema:VideoObject ;
    schema:rangeIncludes schema:MediaObject,
        schema:Text ;
    rdfs:comment "The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the <a class=\"localLink\" href=\"http://schema.org/encodingFormat\">encodingFormat</a>." .

schema:carbohydrateContent a rdf:Property ;
    rdfs:label "carbohydrateContent" ;
    schema:domainIncludes schema:NutritionInformation ;
    schema:rangeIncludes schema:Mass ;
    rdfs:comment "The number of grams of carbohydrates." .

schema:cargoVolume a rdf:Property ;
    rdfs:label "cargoVolume" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:QuantitativeValue ;
    rdfs:comment """The available volume for cargo or luggage. For automobiles, this is usually the trunk volume.<br/><br/>

Typical unit code(s): LTR for liters, FTQ for cubic foot/feet<br/><br/>

Note: You can use <a class="localLink" href="http://schema.org/minValue">minValue</a> and <a class="localLink" href="http://schema.org/maxValue">maxValue</a> to indicate ranges.""" .

schema:carrier a rdf:Property ;
    rdfs:label "carrier" ;
    schema:domainIncludes schema:Flight,
        schema:ParcelDelivery ;
    schema:rangeIncludes schema:Organization ;
    schema:supersededBy schema:provider ;
    rdfs:comment "'carrier' is an out-dated term indicating the 'provider' for parcel delivery and flights." .

schema:carrierRequirements a rdf:Property ;
    rdfs:label "carrierRequirements" ;
    schema:domainIncludes schema:MobileApplication ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Specifies specific carrier(s) requirements for the application (e.g. an application may only work on a specific carrier network)." .

schema:catalog a rdf:Property ;
    rdfs:label "catalog" ;
    schema:domainIncludes schema:Dataset ;
    schema:rangeIncludes schema:DataCatalog ;
    schema:supersededBy schema:includedInDataCatalog ;
    rdfs:comment "A data catalog which contains this dataset." .

schema:catalogNumber a rdf:Property ;
    rdfs:label "catalogNumber" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    schema:domainIncludes schema:MusicRelease ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The catalog number for the release." .

schema:category a rdf:Property ;
    rdfs:label "category" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1741> ;
    schema:category "issue-1741" ;
    schema:domainIncludes schema:ActionAccessSpecification,
        schema:Invoice,
        schema:Offer,
        schema:PhysicalActivity,
        schema:Product,
        schema:Service ;
    schema:rangeIncludes schema:PhysicalActivityCategory,
        schema:Text,
        schema:Thing ;
    rdfs:comment "A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy." .

schema:ccRecipient a rdf:Property ;
    rdfs:label "ccRecipient" ;
    schema:domainIncludes schema:Message ;
    schema:rangeIncludes schema:ContactPoint,
        schema:Organization,
        schema:Person ;
    rdfs:comment "A sub property of recipient. The recipient copied on a message." ;
    rdfs:subPropertyOf schema:recipient .

schema:character a rdf:Property ;
    rdfs:label "character" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Person ;
    rdfs:comment "Fictional person connected with a creative work." .

schema:characterAttribute a rdf:Property ;
    rdfs:label "characterAttribute" ;
    schema:domainIncludes schema:Game,
        schema:VideoGameSeries ;
    schema:rangeIncludes schema:Thing ;
    rdfs:comment "A piece of data that represents a particular aspect of a fictional character (skill, power, character points, advantage, disadvantage)." .

schema:characterName a rdf:Property ;
    rdfs:label "characterName" ;
    schema:domainIncludes schema:PerformanceRole ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The name of a character played in some acting or performing role, i.e. in a PerformanceRole." .

schema:cheatCode a rdf:Property ;
    rdfs:label "cheatCode" ;
    schema:domainIncludes schema:VideoGame,
        schema:VideoGameSeries ;
    schema:rangeIncludes schema:CreativeWork ;
    rdfs:comment "Cheat codes to the game." .

schema:checkinTime a rdf:Property ;
    rdfs:label "checkinTime" ;
    schema:domainIncludes schema:LodgingBusiness,
        schema:LodgingReservation ;
    schema:rangeIncludes schema:DateTime ;
    rdfs:comment "The earliest someone may check into a lodging establishment." .

schema:checkoutTime a rdf:Property ;
    rdfs:label "checkoutTime" ;
    schema:domainIncludes schema:LodgingBusiness,
        schema:LodgingReservation ;
    schema:rangeIncludes schema:DateTime ;
    rdfs:comment "The latest someone may check out of a lodging establishment." .

schema:childMaxAge a rdf:Property ;
    rdfs:label "childMaxAge" ;
    schema:domainIncludes schema:ParentAudience ;
    schema:rangeIncludes schema:Number ;
    rdfs:comment "Maximal age of the child." .

schema:childMinAge a rdf:Property ;
    rdfs:label "childMinAge" ;
    schema:domainIncludes schema:ParentAudience ;
    schema:rangeIncludes schema:Number ;
    rdfs:comment "Minimal age of the child." .

schema:children a rdf:Property ;
    rdfs:label "children" ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Person ;
    rdfs:comment "A child of the person." .

schema:cholesterolContent a rdf:Property ;
    rdfs:label "cholesterolContent" ;
    schema:domainIncludes schema:NutritionInformation ;
    schema:rangeIncludes schema:Mass ;
    rdfs:comment "The number of milligrams of cholesterol." .

schema:circle a rdf:Property ;
    rdfs:label "circle" ;
    schema:domainIncludes schema:GeoShape ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "A circle is the circular region of a specified radius centered at a specified latitude and longitude. A circle is expressed as a pair followed by a radius in meters." .

schema:citation a rdf:Property ;
    rdfs:label "citation" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:CreativeWork,
        schema:Text ;
    rdfs:comment "A citation or reference to another creative work, such as another publication, web page, scholarly article, etc." .

schema:claimReviewed a rdf:Property ;
    rdfs:label "claimReviewed" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1061> ;
    schema:category "issue-1061" ;
    schema:domainIncludes schema:ClaimReview ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "A short summary of the specific claims reviewed in a ClaimReview." .

schema:clipNumber a rdf:Property ;
    rdfs:label "clipNumber" ;
    schema:domainIncludes schema:Clip ;
    schema:rangeIncludes schema:Integer,
        schema:Text ;
    rdfs:comment "Position of the clip within an ordered group of clips." ;
    rdfs:subPropertyOf schema:position .

schema:closes a rdf:Property ;
    rdfs:label "closes" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:OpeningHoursSpecification ;
    schema:rangeIncludes schema:Time ;
    rdfs:comment "The closing hour of the place or service on the given day(s) of the week." .

schema:coach a rdf:Property ;
    rdfs:label "coach" ;
    schema:domainIncludes schema:SportsTeam ;
    schema:rangeIncludes schema:Person ;
    rdfs:comment "A person that acts in a coaching role for a sports team." .

schema:codeRepository a rdf:Property ;
    rdfs:label "codeRepository" ;
    schema:domainIncludes schema:SoftwareSourceCode ;
    schema:rangeIncludes schema:URL ;
    rdfs:comment "Link to the repository where the un-compiled, human readable code and related code is located (SVN, github, CodePlex)." .

schema:colleagues a rdf:Property ;
    rdfs:label "colleagues" ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Person ;
    schema:supersededBy schema:colleague ;
    rdfs:comment "A colleague of the person." .

schema:collection a rdf:Property ;
    rdfs:label "collection" ;
    schema:domainIncludes schema:UpdateAction ;
    schema:rangeIncludes schema:Thing ;
    schema:supersededBy schema:targetCollection ;
    rdfs:comment "A sub property of object. The collection target of the action." ;
    rdfs:subPropertyOf schema:object .

schema:color a rdf:Property ;
    rdfs:label "color" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Product ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The color of the product." .

schema:comment a rdf:Property ;
    rdfs:label "comment" ;
    schema:domainIncludes schema:CreativeWork,
        schema:RsvpAction ;
    schema:rangeIncludes schema:Comment ;
    rdfs:comment "Comments, typically from users." .

schema:commentCount a rdf:Property ;
    rdfs:label "commentCount" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Integer ;
    rdfs:comment "The number of comments this CreativeWork (e.g. Article, Question or Answer) has received. This is most applicable to works published in Web sites with commenting system; additional comments may exist elsewhere." .

schema:commentText a rdf:Property ;
    rdfs:label "commentText" ;
    schema:domainIncludes schema:UserComments ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The text of the UserComment." .

schema:commentTime a rdf:Property ;
    rdfs:label "commentTime" ;
    schema:domainIncludes schema:UserComments ;
    schema:rangeIncludes schema:Date,
        schema:DateTime ;
    rdfs:comment "The time at which the UserComment was made." .

schema:composer a rdf:Property ;
    rdfs:label "composer" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    schema:domainIncludes schema:Event,
        schema:MusicComposition ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    rdfs:comment "The person or organization who wrote a composition, or who is the composer of a work performed at some event." .

schema:confirmationNumber a rdf:Property ;
    rdfs:label "confirmationNumber" ;
    schema:domainIncludes schema:Invoice,
        schema:Order ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "A number that confirms the given order or payment has been received." ;
    rdfs:subPropertyOf schema:identifier .

schema:contactOption a rdf:Property ;
    rdfs:label "contactOption" ;
    schema:domainIncludes schema:ContactPoint ;
    schema:rangeIncludes schema:ContactPointOption ;
    rdfs:comment "An option available on this contact point (e.g. a toll-free number or support for hearing-impaired callers)." .

schema:contactPoints a rdf:Property ;
    rdfs:label "contactPoints" ;
    schema:domainIncludes schema:Organization,
        schema:Person ;
    schema:rangeIncludes schema:ContactPoint ;
    schema:supersededBy schema:contactPoint ;
    rdfs:comment "A contact point for a person or organization." .

schema:contactType a rdf:Property ;
    rdfs:label "contactType" ;
    schema:domainIncludes schema:ContactPoint ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "A person or organization can have different contact points, for different purposes. For example, a sales contact point, a PR contact point and so on. This property is used to specify the kind of contact point." .

schema:containedIn a rdf:Property ;
    rdfs:label "containedIn" ;
    schema:domainIncludes schema:Place ;
    schema:rangeIncludes schema:Place ;
    schema:supersededBy schema:containedInPlace ;
    rdfs:comment "The basic containment relation between a place and one that contains it." .

schema:contentRating a rdf:Property ;
    rdfs:label "contentRating" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Rating,
        schema:Text ;
    rdfs:comment "Official rating of a piece of content&#x2014;for example,'MPAA PG-13'." .

schema:contentSize a rdf:Property ;
    rdfs:label "contentSize" ;
    schema:domainIncludes schema:MediaObject ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "File size in (mega/kilo) bytes." .

schema:contentType a rdf:Property ;
    rdfs:label "contentType" ;
    schema:domainIncludes schema:EntryPoint ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The supported content type(s) for an EntryPoint response." .

schema:contentUrl a rdf:Property ;
    rdfs:label "contentUrl" ;
    schema:domainIncludes schema:MediaObject ;
    schema:rangeIncludes schema:URL ;
    rdfs:comment "Actual bytes of the media object, for example the image file or video file." .

schema:contributor a rdf:Property ;
    rdfs:label "contributor" ;
    schema:domainIncludes schema:CreativeWork,
        schema:Event ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    rdfs:comment "A secondary contributor to the CreativeWork or Event." .

schema:cookTime a rdf:Property ;
    rdfs:label "cookTime" ;
    schema:domainIncludes schema:Recipe ;
    schema:rangeIncludes schema:Duration ;
    rdfs:comment "The time it takes to actually cook the dish, in <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 duration format</a>." ;
    rdfs:subPropertyOf schema:performTime .

schema:cookingMethod a rdf:Property ;
    rdfs:label "cookingMethod" ;
    schema:domainIncludes schema:Recipe ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The method of cooking, such as Frying, Steaming, ..." .

schema:copyrightHolder a rdf:Property ;
    rdfs:label "copyrightHolder" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    rdfs:comment "The party holding the legal copyright to the CreativeWork." .

schema:copyrightYear a rdf:Property ;
    rdfs:label "copyrightYear" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Number ;
    rdfs:comment "The year during which the claimed copyright for the CreativeWork was first asserted." .

schema:countriesNotSupported a rdf:Property ;
    rdfs:label "countriesNotSupported" ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Countries for which the application is not supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code." .

schema:countriesSupported a rdf:Property ;
    rdfs:label "countriesSupported" ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Countries for which the application is supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code." .

schema:countryOfOrigin a rdf:Property ;
    rdfs:label "countryOfOrigin" ;
    schema:domainIncludes schema:Movie,
        schema:TVEpisode,
        schema:TVSeason,
        schema:TVSeries ;
    schema:rangeIncludes schema:Country ;
    rdfs:comment "The country of the principal offices of the production company or individual responsible for the movie or program." .

schema:course a rdf:Property ;
    rdfs:label "course" ;
    schema:domainIncludes schema:ExerciseAction ;
    schema:rangeIncludes schema:Place ;
    schema:supersededBy schema:exerciseCourse ;
    rdfs:comment "A sub property of location. The course where this action was taken." ;
    rdfs:subPropertyOf schema:location .

schema:courseCode a rdf:Property ;
    rdfs:label "courseCode" ;
    schema:domainIncludes schema:Course ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The identifier for the <a class=\"localLink\" href=\"http://schema.org/Course\">Course</a> used by the course <a class=\"localLink\" href=\"http://schema.org/provider\">provider</a> (e.g. CS101 or 6.001)." .

schema:courseMode a rdf:Property ;
    rdfs:label "courseMode" ;
    schema:domainIncludes schema:CourseInstance ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    rdfs:comment "The medium or means of delivery of the course instance or the mode of study, either as a text label (e.g. \"online\", \"onsite\" or \"blended\"; \"synchronous\" or \"asynchronous\"; \"full-time\" or \"part-time\") or as a URL reference to a term from a controlled vocabulary (e.g. https://ceds.ed.gov/element/001311#Asynchronous )." .

schema:coursePrerequisites a rdf:Property ;
    rdfs:label "coursePrerequisites" ;
    schema:domainIncludes schema:Course ;
    schema:rangeIncludes schema:AlignmentObject,
        schema:Course,
        schema:Text ;
    rdfs:comment "Requirements for taking the Course. May be completion of another <a class=\"localLink\" href=\"http://schema.org/Course\">Course</a> or a textual description like \"permission of instructor\". Requirements may be a pre-requisite competency, referenced using <a class=\"localLink\" href=\"http://schema.org/AlignmentObject\">AlignmentObject</a>." .

schema:coverageEndTime a rdf:Property ;
    rdfs:label "coverageEndTime" ;
    schema:domainIncludes schema:LiveBlogPosting ;
    schema:rangeIncludes schema:DateTime ;
    rdfs:comment "The time when the live blog will stop covering the Event. Note that coverage may continue after the Event concludes." .

schema:coverageStartTime a rdf:Property ;
    rdfs:label "coverageStartTime" ;
    schema:domainIncludes schema:LiveBlogPosting ;
    schema:rangeIncludes schema:DateTime ;
    rdfs:comment "The time when the live blog will begin covering the Event. Note that coverage may begin before the Event's start time. The LiveBlogPosting may also be created before coverage begins." .

schema:creator a rdf:Property ;
    rdfs:label "creator" ;
    schema:domainIncludes schema:CreativeWork,
        schema:UserComments ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    rdfs:comment "The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork." .

schema:creditedTo a rdf:Property ;
    rdfs:label "creditedTo" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    schema:domainIncludes schema:MusicRelease ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    rdfs:comment "The group the release is credited to if different than the byArtist. For example, Red and Blue is credited to \"Stefani Germanotta Band\", but by Lady Gaga." .

schema:cssSelector a rdf:Property ;
    rdfs:label "cssSelector" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1389> ;
    schema:category "issue-1389" ;
    schema:domainIncludes schema:SpeakableSpecification,
        schema:WebPageElement ;
    schema:rangeIncludes schema:CssSelectorType ;
    rdfs:comment "A CSS selector, e.g. of a <a class=\"localLink\" href=\"http://schema.org/SpeakableSpecification\">SpeakableSpecification</a> or <a class=\"localLink\" href=\"http://schema.org/WebPageElement\">WebPageElement</a>. In the latter case, multiple matches within a page can constitute a single conceptual \"Web page element\"." .

schema:currenciesAccepted a rdf:Property ;
    rdfs:label "currenciesAccepted" ;
    schema:domainIncludes schema:LocalBusiness ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment """The currency accepted.<br/><br/>

Use standard formats: <a href="http://en.wikipedia.org/wiki/ISO_4217">ISO 4217 currency format</a> e.g. "USD"; <a href="https://en.wikipedia.org/wiki/List_of_cryptocurrencies">Ticker symbol</a> for cryptocurrencies e.g. "BTC"; well known names for <a href="https://en.wikipedia.org/wiki/Local_exchange_trading_system">Local Exchange Tradings Systems</a> (LETS) and other currency types e.g. "Ithaca HOUR".""" .

schema:currency a rdf:Property ;
    rdfs:label "currency" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1253> ;
    schema:category "issue-1253" ;
    schema:domainIncludes schema:DatedMoneySpecification,
        schema:ExchangeRateSpecification,
        schema:LoanOrCredit,
        schema:MonetaryAmount,
        schema:MonetaryAmountDistribution ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment """The currency in which the monetary amount is expressed.<br/><br/>

Use standard formats: <a href="http://en.wikipedia.org/wiki/ISO_4217">ISO 4217 currency format</a> e.g. "USD"; <a href="https://en.wikipedia.org/wiki/List_of_cryptocurrencies">Ticker symbol</a> for cryptocurrencies e.g. "BTC"; well known names for <a href="https://en.wikipedia.org/wiki/Local_exchange_trading_system">Local Exchange Tradings Systems</a> (LETS) and other currency types e.g. "Ithaca HOUR".""" .

schema:customer a rdf:Property ;
    rdfs:label "customer" ;
    schema:domainIncludes schema:Invoice,
        schema:Order ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    rdfs:comment "Party placing the order or paying the invoice." .

schema:dataFeedElement a rdf:Property ;
    rdfs:label "dataFeedElement" ;
    schema:domainIncludes schema:DataFeed ;
    schema:rangeIncludes schema:DataFeedItem,
        schema:Text,
        schema:Thing ;
    rdfs:comment "An item within in a data feed. Data feeds may have many elements." .

schema:datasetTimeInterval a rdf:Property ;
    rdfs:label "datasetTimeInterval" ;
    schema:domainIncludes schema:Dataset ;
    schema:rangeIncludes schema:DateTime ;
    schema:supersededBy schema:temporalCoverage ;
    rdfs:comment "The range of temporal applicability of a dataset, e.g. for a 2011 census dataset, the year 2011 (in ISO 8601 time interval format)." .

schema:dateCreated a rdf:Property ;
    rdfs:label "dateCreated" ;
    schema:domainIncludes schema:CreativeWork,
        schema:DataFeedItem ;
    schema:rangeIncludes schema:Date,
        schema:DateTime ;
    rdfs:comment "The date on which the CreativeWork was created or the item was added to a DataFeed." .

schema:dateDeleted a rdf:Property ;
    rdfs:label "dateDeleted" ;
    schema:domainIncludes schema:DataFeedItem ;
    schema:rangeIncludes schema:DateTime ;
    rdfs:comment "The datetime the item was removed from the DataFeed." .

schema:dateIssued a rdf:Property ;
    rdfs:label "dateIssued" ;
    schema:domainIncludes schema:Ticket ;
    schema:rangeIncludes schema:DateTime ;
    rdfs:comment "The date the ticket was issued." .

schema:dateModified a rdf:Property ;
    rdfs:label "dateModified" ;
    schema:domainIncludes schema:CreativeWork,
        schema:DataFeedItem ;
    schema:rangeIncludes schema:Date,
        schema:DateTime ;
    rdfs:comment "The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed." .

schema:datePosted a rdf:Property ;
    rdfs:label "datePosted" ;
    schema:domainIncludes schema:JobPosting ;
    schema:rangeIncludes schema:Date ;
    rdfs:comment "Publication date for the job posting." .

schema:datePublished a rdf:Property ;
    rdfs:label "datePublished" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Date ;
    rdfs:comment "Date of first broadcast/publication." .

schema:dateRead a rdf:Property ;
    rdfs:label "dateRead" ;
    schema:domainIncludes schema:Message ;
    schema:rangeIncludes schema:DateTime ;
    rdfs:comment "The date/time at which the message has been read by the recipient if a single recipient exists." .

schema:dateReceived a rdf:Property ;
    rdfs:label "dateReceived" ;
    schema:domainIncludes schema:Message ;
    schema:rangeIncludes schema:DateTime ;
    rdfs:comment "The date/time the message was received if a single recipient exists." .

schema:dateSent a rdf:Property ;
    rdfs:label "dateSent" ;
    schema:domainIncludes schema:Message ;
    schema:rangeIncludes schema:DateTime ;
    rdfs:comment "The date/time at which the message was sent." .

schema:dateVehicleFirstRegistered a rdf:Property ;
    rdfs:label "dateVehicleFirstRegistered" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:Date ;
    rdfs:comment "The date of the first registration of the vehicle with the respective public authorities." .

schema:dateline a rdf:Property ;
    rdfs:label "dateline" ;
    schema:domainIncludes schema:NewsArticle ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment """A <a href="https://en.wikipedia.org/wiki/Dateline">dateline</a> is a brief piece of text included in news articles that describes where and when the story was written or filed though the date is often omitted. Sometimes only a placename is provided.<br/><br/>

Structured representations of dateline-related information can also be expressed more explicitly using <a class="localLink" href="http://schema.org/locationCreated">locationCreated</a> (which represents where a work was created e.g. where a news report was written).  For location depicted or described in the content, use <a class="localLink" href="http://schema.org/contentLocation">contentLocation</a>.<br/><br/>

Dateline summaries are oriented more towards human readers than towards automated processing, and can vary substantially. Some examples: "BEIRUT, Lebanon, June 2.", "Paris, France", "December 19, 2017 11:43AM Reporting from Washington", "Beijing/Moscow", "QUEZON CITY, Philippines".""" .

schema:dayOfWeek a rdf:Property ;
    rdfs:label "dayOfWeek" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:OpeningHoursSpecification ;
    schema:rangeIncludes schema:DayOfWeek ;
    rdfs:comment "The day of the week for which these opening hours are valid." .

schema:deathDate a rdf:Property ;
    rdfs:label "deathDate" ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Date ;
    rdfs:comment "Date of death." .

schema:deathPlace a rdf:Property ;
    rdfs:label "deathPlace" ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Place ;
    rdfs:comment "The place where the person died." .

schema:defaultValue a rdf:Property ;
    rdfs:label "defaultValue" ;
    schema:domainIncludes schema:PropertyValueSpecification ;
    schema:rangeIncludes schema:Text,
        schema:Thing ;
    rdfs:comment "The default value of the input.  For properties that expect a literal, the default is a literal value, for properties that expect an object, it's an ID reference to one of the current values." .

schema:deliveryAddress a rdf:Property ;
    rdfs:label "deliveryAddress" ;
    schema:domainIncludes schema:ParcelDelivery ;
    schema:rangeIncludes schema:PostalAddress ;
    rdfs:comment "Destination address." .

schema:deliveryLeadTime a rdf:Property ;
    rdfs:label "deliveryLeadTime" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Demand,
        schema:Offer ;
    schema:rangeIncludes schema:QuantitativeValue ;
    rdfs:comment "The typical delay between the receipt of the order and the goods either leaving the warehouse or being prepared for pickup, in case the delivery method is on site pickup." .

schema:deliveryMethod a rdf:Property ;
    rdfs:label "deliveryMethod" ;
    schema:domainIncludes schema:OrderAction,
        schema:ReceiveAction,
        schema:SendAction,
        schema:TrackAction ;
    schema:rangeIncludes schema:DeliveryMethod ;
    rdfs:comment "A sub property of instrument. The method of delivery." ;
    rdfs:subPropertyOf schema:instrument .

schema:deliveryStatus a rdf:Property ;
    rdfs:label "deliveryStatus" ;
    schema:domainIncludes schema:ParcelDelivery ;
    schema:rangeIncludes schema:DeliveryEvent ;
    rdfs:comment "New entry added as the package passes through each leg of its journey (from shipment to final delivery)." .

schema:department a rdf:Property ;
    rdfs:label "department" ;
    schema:domainIncludes schema:Organization ;
    schema:rangeIncludes schema:Organization ;
    rdfs:comment "A relationship between an organization and a department of that organization, also described as an organization (allowing different urls, logos, opening hours). For example: a store with a pharmacy, or a bakery with a cafe." .

schema:departureAirport a rdf:Property ;
    rdfs:label "departureAirport" ;
    schema:domainIncludes schema:Flight ;
    schema:rangeIncludes schema:Airport ;
    rdfs:comment "The airport where the flight originates." .

schema:departureBusStop a rdf:Property ;
    rdfs:label "departureBusStop" ;
    schema:domainIncludes schema:BusTrip ;
    schema:rangeIncludes schema:BusStation,
        schema:BusStop ;
    rdfs:comment "The stop or station from which the bus departs." .

schema:departureGate a rdf:Property ;
    rdfs:label "departureGate" ;
    schema:domainIncludes schema:Flight ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Identifier of the flight's departure gate." .

schema:departurePlatform a rdf:Property ;
    rdfs:label "departurePlatform" ;
    schema:domainIncludes schema:TrainTrip ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The platform from which the train departs." .

schema:departureStation a rdf:Property ;
    rdfs:label "departureStation" ;
    schema:domainIncludes schema:TrainTrip ;
    schema:rangeIncludes schema:TrainStation ;
    rdfs:comment "The station from which the train departs." .

schema:departureTerminal a rdf:Property ;
    rdfs:label "departureTerminal" ;
    schema:domainIncludes schema:Flight ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Identifier of the flight's departure terminal." .

schema:departureTime a rdf:Property ;
    rdfs:label "departureTime" ;
    schema:domainIncludes schema:Trip ;
    schema:rangeIncludes schema:DateTime ;
    rdfs:comment "The expected departure time." .

schema:dependencies a rdf:Property ;
    rdfs:label "dependencies" ;
    schema:domainIncludes schema:TechArticle ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Prerequisites needed to fulfill steps in article." .

schema:depth a rdf:Property ;
    rdfs:label "depth" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Product,
        schema:VisualArtwork ;
    schema:rangeIncludes schema:Distance,
        schema:QuantitativeValue ;
    rdfs:comment "The depth of the item." .

schema:device a rdf:Property ;
    rdfs:label "device" ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text ;
    schema:supersededBy schema:availableOnDevice ;
    rdfs:comment "Device required to run the application. Used in cases where a specific make/model is required to run the application." .

schema:directors a rdf:Property ;
    rdfs:label "directors" ;
    schema:domainIncludes schema:Clip,
        schema:Episode,
        schema:Movie,
        schema:MovieSeries,
        schema:RadioSeries,
        schema:TVSeries,
        schema:VideoGame,
        schema:VideoGameSeries,
        schema:VideoObject ;
    schema:rangeIncludes schema:Person ;
    schema:supersededBy schema:director ;
    rdfs:comment "A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip." .

schema:disambiguatingDescription a rdf:Property ;
    rdfs:label "disambiguatingDescription" ;
    schema:domainIncludes schema:Thing ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation." ;
    rdfs:subPropertyOf schema:description .

schema:discount a rdf:Property ;
    rdfs:label "discount" ;
    schema:domainIncludes schema:Order ;
    schema:rangeIncludes schema:Number,
        schema:Text ;
    rdfs:comment "Any discount applied (to an Order)." .

schema:discountCode a rdf:Property ;
    rdfs:label "discountCode" ;
    schema:domainIncludes schema:Order ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Code used to redeem a discount." .

schema:discountCurrency a rdf:Property ;
    rdfs:label "discountCurrency" ;
    schema:domainIncludes schema:Order ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment """The currency of the discount.<br/><br/>

Use standard formats: <a href="http://en.wikipedia.org/wiki/ISO_4217">ISO 4217 currency format</a> e.g. "USD"; <a href="https://en.wikipedia.org/wiki/List_of_cryptocurrencies">Ticker symbol</a> for cryptocurrencies e.g. "BTC"; well known names for <a href="https://en.wikipedia.org/wiki/Local_exchange_trading_system">Local Exchange Tradings Systems</a> (LETS) and other currency types e.g. "Ithaca HOUR".""" .

schema:discusses a rdf:Property ;
    rdfs:label "discusses" ;
    schema:domainIncludes schema:UserComments ;
    schema:rangeIncludes schema:CreativeWork ;
    rdfs:comment "Specifies the CreativeWork associated with the UserComment." .

schema:discussionUrl a rdf:Property ;
    rdfs:label "discussionUrl" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:URL ;
    rdfs:comment "A link to the page containing the comments of the CreativeWork." .

schema:dissolutionDate a rdf:Property ;
    rdfs:label "dissolutionDate" ;
    schema:domainIncludes schema:Organization ;
    schema:rangeIncludes schema:Date ;
    rdfs:comment "The date that this organization was dissolved." .

schema:distance a rdf:Property ;
    rdfs:label "distance" ;
    schema:domainIncludes schema:ExerciseAction,
        schema:TravelAction ;
    schema:rangeIncludes schema:Distance ;
    rdfs:comment "The distance travelled, e.g. exercising or travelling." .

schema:distribution a rdf:Property ;
    rdfs:label "distribution" ;
    schema:domainIncludes schema:Dataset ;
    schema:rangeIncludes schema:DataDownload ;
    rdfs:comment "A downloadable form of this dataset, at a specific location, in a specific format." .

schema:doorTime a rdf:Property ;
    rdfs:label "doorTime" ;
    schema:domainIncludes schema:Event ;
    schema:rangeIncludes schema:DateTime ;
    rdfs:comment "The time admission will commence." .

schema:downloadUrl a rdf:Property ;
    rdfs:label "downloadUrl" ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:URL ;
    rdfs:comment "If the file can be downloaded, URL to download the binary." .

schema:downvoteCount a rdf:Property ;
    rdfs:label "downvoteCount" ;
    schema:domainIncludes schema:Comment,
        schema:Question ;
    schema:rangeIncludes schema:Integer ;
    rdfs:comment "The number of downvotes this question, answer or comment has received from the community." .

schema:driveWheelConfiguration a rdf:Property ;
    rdfs:label "driveWheelConfiguration" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:DriveWheelConfigurationValue,
        schema:Text ;
    rdfs:comment "The drive wheel configuration, i.e. which roadwheels will receive torque from the vehicle's engine via the drivetrain." .

schema:dropoffLocation a rdf:Property ;
    rdfs:label "dropoffLocation" ;
    schema:domainIncludes schema:RentalCarReservation ;
    schema:rangeIncludes schema:Place ;
    rdfs:comment "Where a rental car can be dropped off." .

schema:dropoffTime a rdf:Property ;
    rdfs:label "dropoffTime" ;
    schema:domainIncludes schema:RentalCarReservation ;
    schema:rangeIncludes schema:DateTime ;
    rdfs:comment "When a rental car can be dropped off." .

schema:duns a rdf:Property ;
    rdfs:label "duns" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Organization,
        schema:Person ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The Dun &amp; Bradstreet DUNS number for identifying an organization or business person." ;
    rdfs:subPropertyOf schema:identifier .

schema:durationOfWarranty a rdf:Property ;
    rdfs:label "durationOfWarranty" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:WarrantyPromise ;
    schema:rangeIncludes schema:QuantitativeValue ;
    rdfs:comment "The duration of the warranty promise. Common unitCode values are ANN for year, MON for months, or DAY for days." .

schema:duringMedia a rdf:Property ;
    rdfs:label "duringMedia" ;
    schema:domainIncludes schema:HowToDirection ;
    schema:rangeIncludes schema:MediaObject,
        schema:URL ;
    rdfs:comment "A media object representing the circumstances while performing this direction." .

schema:editor a rdf:Property ;
    rdfs:label "editor" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Person ;
    rdfs:comment "Specifies the Person who edited the CreativeWork." .

schema:educationalAlignment a rdf:Property ;
    rdfs:label "educationalAlignment" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:AlignmentObject ;
    rdfs:comment "An alignment to an established educational framework." .

schema:educationalCredentialAwarded a rdf:Property ;
    rdfs:label "educationalCredentialAwarded" ;
    schema:domainIncludes schema:Course ;
    schema:rangeIncludes schema:EducationalOccupationalCredential,
        schema:Text,
        schema:URL ;
    rdfs:comment "A description of the qualification, award, certificate, diploma or other educational credential awarded as a consequence of successful completion of this course." .

schema:educationalFramework a rdf:Property ;
    rdfs:label "educationalFramework" ;
    schema:domainIncludes schema:AlignmentObject ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The framework to which the resource being described is aligned." .

schema:educationalRole a rdf:Property ;
    rdfs:label "educationalRole" ;
    schema:domainIncludes schema:EducationalAudience ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "An educationalRole of an EducationalAudience." .

schema:educationalUse a rdf:Property ;
    rdfs:label "educationalUse" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The purpose of a work in the context of education; for example, 'assignment', 'group work'." .

schema:elevation a rdf:Property ;
    rdfs:label "elevation" ;
    schema:domainIncludes schema:GeoCoordinates,
        schema:GeoShape ;
    schema:rangeIncludes schema:Number,
        schema:Text ;
    rdfs:comment "The elevation of a location (<a href=\"https://en.wikipedia.org/wiki/World_Geodetic_System\">WGS 84</a>). Values may be of the form 'NUMBER UNIT<em>OF</em>MEASUREMENT' (e.g., '1,000 m', '3,200 ft') while numbers alone should be assumed to be a value in meters." .

schema:eligibleCustomerType a rdf:Property ;
    rdfs:label "eligibleCustomerType" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Demand,
        schema:Offer ;
    schema:rangeIncludes schema:BusinessEntityType ;
    rdfs:comment "The type(s) of customers for which the given offer is valid." .

schema:eligibleDuration a rdf:Property ;
    rdfs:label "eligibleDuration" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Demand,
        schema:Offer ;
    schema:rangeIncludes schema:QuantitativeValue ;
    rdfs:comment "The duration for which the given offer is valid." .

schema:eligibleQuantity a rdf:Property ;
    rdfs:label "eligibleQuantity" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Demand,
        schema:Offer,
        schema:PriceSpecification ;
    schema:rangeIncludes schema:QuantitativeValue ;
    rdfs:comment "The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity." .

schema:eligibleRegion a rdf:Property ;
    rdfs:label "eligibleRegion" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms>,
        <https://github.com/schemaorg/schemaorg/issues/1741> ;
    schema:category "issue-1741" ;
    schema:domainIncludes schema:ActionAccessSpecification,
        schema:DeliveryChargeSpecification,
        schema:Demand,
        schema:Offer ;
    schema:rangeIncludes schema:GeoShape,
        schema:Place,
        schema:Text ;
    rdfs:comment """The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.<br/><br/>

See also <a class="localLink" href="http://schema.org/ineligibleRegion">ineligibleRegion</a>.""" ;
    rdfs:subPropertyOf schema:areaServed .

schema:eligibleTransactionVolume a rdf:Property ;
    rdfs:label "eligibleTransactionVolume" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Demand,
        schema:Offer,
        schema:PriceSpecification ;
    schema:rangeIncludes schema:PriceSpecification ;
    rdfs:comment "The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount." .

schema:email a rdf:Property ;
    rdfs:label "email" ;
    schema:domainIncludes schema:ContactPoint,
        schema:Organization,
        schema:Person ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Email address." .

schema:embedUrl a rdf:Property ;
    rdfs:label "embedUrl" ;
    schema:domainIncludes schema:MediaObject ;
    schema:rangeIncludes schema:URL ;
    rdfs:comment "A URL pointing to a player for a specific video. In general, this is the information in the <code>src</code> element of an <code>embed</code> tag and should not be the same as the content of the <code>loc</code> tag." .

schema:employees a rdf:Property ;
    rdfs:label "employees" ;
    schema:domainIncludes schema:Organization ;
    schema:rangeIncludes schema:Person ;
    schema:supersededBy schema:employee ;
    rdfs:comment "People working for this organization." .

schema:employmentType a rdf:Property ;
    rdfs:label "employmentType" ;
    schema:domainIncludes schema:JobPosting ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Type of employment (e.g. full-time, part-time, contract, temporary, seasonal, internship)." .

schema:encodingType a rdf:Property ;
    rdfs:label "encodingType" ;
    schema:domainIncludes schema:EntryPoint ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The supported encoding type(s) for an EntryPoint request." .

schema:encodings a rdf:Property ;
    rdfs:label "encodings" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:MediaObject ;
    schema:supersededBy schema:encoding ;
    rdfs:comment "A media object that encodes this CreativeWork." .

schema:endDate a rdf:Property ;
    rdfs:label "endDate" ;
    schema:domainIncludes schema:CreativeWorkSeason,
        schema:CreativeWorkSeries,
        schema:DatedMoneySpecification,
        schema:Event,
        schema:Role ;
    schema:rangeIncludes schema:Date,
        schema:DateTime ;
    rdfs:comment "The end date and time of the item (in <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 date format</a>)." .

schema:endTime a rdf:Property ;
    rdfs:label "endTime" ;
    schema:domainIncludes schema:Action,
        schema:FoodEstablishmentReservation,
        schema:MediaObject ;
    schema:rangeIncludes schema:DateTime ;
    rdfs:comment """The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to <em>December</em>. For media, including audio and video, it's the time offset of the end of a clip within a larger file.<br/><br/>

Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.""" .

schema:endorsee a rdf:Property ;
    rdfs:label "endorsee" ;
    schema:domainIncludes schema:EndorseAction ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    rdfs:comment "A sub property of participant. The person/organization being supported." ;
    rdfs:subPropertyOf schema:participant .

schema:entertainmentBusiness a rdf:Property ;
    rdfs:label "entertainmentBusiness" ;
    schema:domainIncludes schema:PerformAction ;
    schema:rangeIncludes schema:EntertainmentBusiness ;
    rdfs:comment "A sub property of location. The entertainment business where the action occurred." ;
    rdfs:subPropertyOf schema:location .

schema:episodeNumber a rdf:Property ;
    rdfs:label "episodeNumber" ;
    schema:domainIncludes schema:Episode ;
    schema:rangeIncludes schema:Integer,
        schema:Text ;
    rdfs:comment "Position of the episode within an ordered group of episodes." ;
    rdfs:subPropertyOf schema:position .

schema:episodes a rdf:Property ;
    rdfs:label "episodes" ;
    schema:domainIncludes schema:CreativeWorkSeason,
        schema:RadioSeries,
        schema:TVSeries,
        schema:VideoGameSeries ;
    schema:rangeIncludes schema:Episode ;
    schema:supersededBy schema:episode ;
    rdfs:comment "An episode of a TV/radio series or season." .

schema:equal a rdf:Property ;
    rdfs:label "equal" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:QualitativeValue ;
    schema:rangeIncludes schema:QualitativeValue ;
    rdfs:comment "This ordering relation for qualitative values indicates that the subject is equal to the object." .

schema:error a rdf:Property ;
    rdfs:label "error" ;
    schema:domainIncludes schema:Action ;
    schema:rangeIncludes schema:Thing ;
    rdfs:comment "For failed actions, more information on the cause of the failure." .

schema:estimatedCost a rdf:Property ;
    rdfs:label "estimatedCost" ;
    schema:domainIncludes schema:HowTo,
        schema:HowToSupply ;
    schema:rangeIncludes schema:MonetaryAmount,
        schema:Text ;
    rdfs:comment "The estimated cost of the supply or supplies consumed when performing instructions." .

schema:estimatedFlightDuration a rdf:Property ;
    rdfs:label "estimatedFlightDuration" ;
    schema:domainIncludes schema:Flight ;
    schema:rangeIncludes schema:Duration,
        schema:Text ;
    rdfs:comment "The estimated time the flight will take." .

schema:estimatedSalary a rdf:Property ;
    rdfs:label "estimatedSalary" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1698> ;
    schema:category "issue-1698" ;
    schema:domainIncludes schema:JobPosting,
        schema:Occupation ;
    schema:rangeIncludes schema:MonetaryAmount,
        schema:MonetaryAmountDistribution,
        schema:Number ;
    rdfs:comment "An estimated salary for a job posting or occupation, based on a variety of variables including, but not limited to industry, job title, and location. Estimated salaries  are often computed by outside organizations rather than the hiring organization, who may not have committed to the estimated value." .

schema:eventStatus a rdf:Property ;
    rdfs:label "eventStatus" ;
    schema:domainIncludes schema:Event ;
    schema:rangeIncludes schema:EventStatusType ;
    rdfs:comment "An eventStatus of an event represents its status; particularly useful when an event is cancelled or rescheduled." .

schema:events a rdf:Property ;
    rdfs:label "events" ;
    schema:domainIncludes schema:Organization,
        schema:Place ;
    schema:rangeIncludes schema:Event ;
    schema:supersededBy schema:event ;
    rdfs:comment "Upcoming or past events associated with this place or organization." .

schema:exifData a rdf:Property ;
    rdfs:label "exifData" ;
    schema:domainIncludes schema:ImageObject ;
    schema:rangeIncludes schema:PropertyValue,
        schema:Text ;
    rdfs:comment "exif data for this object." .

schema:expectedArrivalFrom a rdf:Property ;
    rdfs:label "expectedArrivalFrom" ;
    schema:domainIncludes schema:ParcelDelivery ;
    schema:rangeIncludes schema:DateTime ;
    rdfs:comment "The earliest date the package may arrive." .

schema:expectedArrivalUntil a rdf:Property ;
    rdfs:label "expectedArrivalUntil" ;
    schema:domainIncludes schema:ParcelDelivery ;
    schema:rangeIncludes schema:DateTime ;
    rdfs:comment "The latest date the package may arrive." .

schema:expectsAcceptanceOf a rdf:Property ;
    rdfs:label "expectsAcceptanceOf" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1741> ;
    schema:category "issue-1741" ;
    schema:domainIncludes schema:ActionAccessSpecification,
        schema:ConsumeAction,
        schema:MediaSubscription ;
    schema:rangeIncludes schema:Offer ;
    rdfs:comment "An Offer which must be accepted before the user can perform the Action. For example, the user may need to buy a movie before being able to watch it." .

schema:experienceRequirements a rdf:Property ;
    rdfs:label "experienceRequirements" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1698> ;
    schema:category "issue-1698" ;
    schema:domainIncludes schema:JobPosting,
        schema:Occupation ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Description of skills and experience needed for the position or Occupation." .

schema:expires a rdf:Property ;
    rdfs:label "expires" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Date ;
    rdfs:comment "Date the content expires and is no longer useful or available. For example a <a class=\"localLink\" href=\"http://schema.org/VideoObject\">VideoObject</a> or <a class=\"localLink\" href=\"http://schema.org/NewsArticle\">NewsArticle</a> whose availability or relevance is time-limited, or a <a class=\"localLink\" href=\"http://schema.org/ClaimReview\">ClaimReview</a> fact check whose publisher wants to indicate that it may no longer be relevant (or helpful to highlight) after some date." .

schema:familyName a rdf:Property ;
    rdfs:label "familyName" ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Family name. In the U.S., the last name of an Person. This can be used along with givenName instead of the name property." .

schema:fatContent a rdf:Property ;
    rdfs:label "fatContent" ;
    schema:domainIncludes schema:NutritionInformation ;
    schema:rangeIncludes schema:Mass ;
    rdfs:comment "The number of grams of fat." .

schema:faxNumber a rdf:Property ;
    rdfs:label "faxNumber" ;
    schema:domainIncludes schema:ContactPoint,
        schema:Organization,
        schema:Person,
        schema:Place ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The fax number." .

schema:featureList a rdf:Property ;
    rdfs:label "featureList" ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    rdfs:comment "Features or modules provided by this application (and possibly required by other applications)." .

schema:feesAndCommissionsSpecification a rdf:Property ;
    rdfs:label "feesAndCommissionsSpecification" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO> ;
    schema:domainIncludes schema:FinancialProduct,
        schema:FinancialService ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    rdfs:comment "Description of fees, commissions, and other terms applied either to a class of financial product, or by a financial service organization." .

schema:fiberContent a rdf:Property ;
    rdfs:label "fiberContent" ;
    schema:domainIncludes schema:NutritionInformation ;
    schema:rangeIncludes schema:Mass ;
    rdfs:comment "The number of grams of fiber." .

schema:fileFormat a rdf:Property ;
    rdfs:label "fileFormat" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    schema:supersededBy schema:encodingFormat ;
    rdfs:comment "Media type, typically MIME format (see <a href=\"http://www.iana.org/assignments/media-types/media-types.xhtml\">IANA site</a>) of the content e.g. application/zip of a SoftwareApplication binary. In cases where a CreativeWork has several media type representations, 'encoding' can be used to indicate each MediaObject alongside particular fileFormat information. Unregistered or niche file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia entry." .

schema:fileSize a rdf:Property ;
    rdfs:label "fileSize" ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Size of the application / package (e.g. 18MB). In the absence of a unit (MB, KB etc.), KB will be assumed." .

schema:firstPerformance a rdf:Property ;
    rdfs:label "firstPerformance" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    schema:domainIncludes schema:MusicComposition ;
    schema:rangeIncludes schema:Event ;
    rdfs:comment "The date and place the work was first performed." .

schema:flightDistance a rdf:Property ;
    rdfs:label "flightDistance" ;
    schema:domainIncludes schema:Flight ;
    schema:rangeIncludes schema:Distance,
        schema:Text ;
    rdfs:comment "The distance of the flight." .

schema:flightNumber a rdf:Property ;
    rdfs:label "flightNumber" ;
    schema:domainIncludes schema:Flight ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The unique identifier for a flight including the airline IATA code. For example, if describing United flight 110, where the IATA code for United is 'UA', the flightNumber is 'UA110'." ;
    rdfs:subPropertyOf schema:identifier .

schema:floorSize a rdf:Property ;
    rdfs:label "floorSize" ;
    dct:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> ;
    schema:domainIncludes schema:Accommodation ;
    schema:rangeIncludes schema:QuantitativeValue ;
    rdfs:comment """The size of the accommodation, e.g. in square meter or squarefoot.
Typical unit code(s): MTK for square meter, FTK for square foot, or YDK for square yard""" .

schema:followee a rdf:Property ;
    rdfs:label "followee" ;
    schema:domainIncludes schema:FollowAction ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    rdfs:comment "A sub property of object. The person or organization being followed." ;
    rdfs:subPropertyOf schema:object .

schema:follows a rdf:Property ;
    rdfs:label "follows" ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Person ;
    rdfs:comment "The most generic uni-directional social relation." .

schema:foodEstablishment a rdf:Property ;
    rdfs:label "foodEstablishment" ;
    schema:domainIncludes schema:CookAction ;
    schema:rangeIncludes schema:FoodEstablishment,
        schema:Place ;
    rdfs:comment "A sub property of location. The specific food establishment where the action occurred." ;
    rdfs:subPropertyOf schema:location .

schema:foodEvent a rdf:Property ;
    rdfs:label "foodEvent" ;
    schema:domainIncludes schema:CookAction ;
    schema:rangeIncludes schema:FoodEvent ;
    rdfs:comment "A sub property of location. The specific food event where the action occurred." ;
    rdfs:subPropertyOf schema:location .

schema:founders a rdf:Property ;
    rdfs:label "founders" ;
    schema:domainIncludes schema:Organization ;
    schema:rangeIncludes schema:Person ;
    schema:supersededBy schema:founder ;
    rdfs:comment "A person who founded this organization." .

schema:foundingDate a rdf:Property ;
    rdfs:label "foundingDate" ;
    schema:domainIncludes schema:Organization ;
    schema:rangeIncludes schema:Date ;
    rdfs:comment "The date that this organization was founded." .

schema:foundingLocation a rdf:Property ;
    rdfs:label "foundingLocation" ;
    schema:domainIncludes schema:Organization ;
    schema:rangeIncludes schema:Place ;
    rdfs:comment "The place where the Organization was founded." .

schema:free a rdf:Property ;
    rdfs:label "free" ;
    schema:domainIncludes schema:PublicationEvent ;
    schema:rangeIncludes schema:Boolean ;
    schema:supersededBy schema:isAccessibleForFree ;
    rdfs:comment "A flag to signal that the item, event, or place is accessible for free." .

schema:fromLocation a rdf:Property ;
    rdfs:label "fromLocation" ;
    schema:domainIncludes schema:ExerciseAction,
        schema:MoveAction,
        schema:TransferAction ;
    schema:rangeIncludes schema:Place ;
    rdfs:comment "A sub property of location. The original location of the object or the agent before the action." ;
    rdfs:subPropertyOf schema:location .

schema:fuelConsumption a rdf:Property ;
    rdfs:label "fuelConsumption" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:QuantitativeValue ;
    rdfs:comment """The amount of fuel consumed for traveling a particular distance or temporal duration with the given vehicle (e.g. liters per 100 km).<br/><br/>

<ul>
<li>Note 1: There are unfortunately no standard unit codes for liters per 100 km.  Use <a class="localLink" href="http://schema.org/unitText">unitText</a> to indicate the unit of measurement, e.g. L/100 km.</li>
<li>Note 2: There are two ways of indicating the fuel consumption, <a class="localLink" href="http://schema.org/fuelConsumption">fuelConsumption</a> (e.g. 8 liters per 100 km) and <a class="localLink" href="http://schema.org/fuelEfficiency">fuelEfficiency</a> (e.g. 30 miles per gallon). They are reciprocal.</li>
<li>Note 3: Often, the absolute value is useful only when related to driving speed ("at 80 km/h") or usage pattern ("city traffic"). You can use <a class="localLink" href="http://schema.org/valueReference">valueReference</a> to link the value for the fuel consumption to another value.</li>
</ul>
""" .

schema:fuelEfficiency a rdf:Property ;
    rdfs:label "fuelEfficiency" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:QuantitativeValue ;
    rdfs:comment """The distance traveled per unit of fuel used; most commonly miles per gallon (mpg) or kilometers per liter (km/L).<br/><br/>

<ul>
<li>Note 1: There are unfortunately no standard unit codes for miles per gallon or kilometers per liter. Use <a class="localLink" href="http://schema.org/unitText">unitText</a> to indicate the unit of measurement, e.g. mpg or km/L.</li>
<li>Note 2: There are two ways of indicating the fuel consumption, <a class="localLink" href="http://schema.org/fuelConsumption">fuelConsumption</a> (e.g. 8 liters per 100 km) and <a class="localLink" href="http://schema.org/fuelEfficiency">fuelEfficiency</a> (e.g. 30 miles per gallon). They are reciprocal.</li>
<li>Note 3: Often, the absolute value is useful only when related to driving speed ("at 80 km/h") or usage pattern ("city traffic"). You can use <a class="localLink" href="http://schema.org/valueReference">valueReference</a> to link the value for the fuel economy to another value.</li>
</ul>
""" .

schema:fuelType a rdf:Property ;
    rdfs:label "fuelType" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> ;
    schema:domainIncludes schema:EngineSpecification,
        schema:Vehicle ;
    schema:rangeIncludes schema:QualitativeValue,
        schema:Text,
        schema:URL ;
    rdfs:comment "The type of fuel suitable for the engine or engines of the vehicle. If the vehicle has only one engine, this property can be attached directly to the vehicle." .

schema:funder a rdf:Property ;
    rdfs:label "funder" ;
    schema:domainIncludes schema:CreativeWork,
        schema:Event,
        schema:MonetaryGrant,
        schema:Organization,
        schema:Person ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    rdfs:comment "A person or organization that supports (sponsors) something through some kind of financial contribution." ;
    rdfs:subPropertyOf schema:sponsor .

schema:gameItem a rdf:Property ;
    rdfs:label "gameItem" ;
    schema:domainIncludes schema:Game,
        schema:VideoGameSeries ;
    schema:rangeIncludes schema:Thing ;
    rdfs:comment "An item is an object within the game world that can be collected by a player or, occasionally, a non-player character." .

schema:gameLocation a rdf:Property ;
    rdfs:label "gameLocation" ;
    schema:domainIncludes schema:Game,
        schema:VideoGameSeries ;
    schema:rangeIncludes schema:Place,
        schema:PostalAddress,
        schema:URL ;
    rdfs:comment "Real or fictional location of the game (or part of game)." .

schema:gamePlatform a rdf:Property ;
    rdfs:label "gamePlatform" ;
    schema:domainIncludes schema:VideoGame,
        schema:VideoGameSeries ;
    schema:rangeIncludes schema:Text,
        schema:Thing,
        schema:URL ;
    rdfs:comment "The electronic systems used to play <a href=\"http://en.wikipedia.org/wiki/Category:Video_game_platforms\">video games</a>." .

schema:gameTip a rdf:Property ;
    rdfs:label "gameTip" ;
    schema:domainIncludes schema:VideoGame ;
    schema:rangeIncludes schema:CreativeWork ;
    rdfs:comment "Links to tips, tactics, etc." .

schema:gender a rdf:Property ;
    rdfs:label "gender" ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:GenderType,
        schema:Text ;
    rdfs:comment "Gender of the person. While http://schema.org/Male and http://schema.org/Female may be used, text strings are also acceptable for people who do not identify as a binary gender." .

schema:genre a rdf:Property ;
    rdfs:label "genre" ;
    schema:domainIncludes schema:BroadcastChannel,
        schema:CreativeWork,
        schema:MusicGroup ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    rdfs:comment "Genre of the creative work, broadcast channel or group." .

schema:geo a rdf:Property ;
    rdfs:label "geo" ;
    schema:domainIncludes schema:Place ;
    schema:rangeIncludes schema:GeoCoordinates,
        schema:GeoShape ;
    rdfs:comment "The geo coordinates of the place." .

schema:geoContains a rdf:Property ;
    rdfs:label "geoContains" ;
    schema:domainIncludes schema:GeospatialGeometry,
        schema:Place ;
    schema:rangeIncludes schema:GeospatialGeometry,
        schema:Place ;
    rdfs:comment "Represents a relationship between two geometries (or the places they represent), relating a containing geometry to a contained geometry. \"a contains b iff no points of b lie in the exterior of a, and at least one point of the interior of b lies in the interior of a\". As defined in <a href=\"https://en.wikipedia.org/wiki/DE-9IM\">DE-9IM</a>." .

schema:geoCoveredBy a rdf:Property ;
    rdfs:label "geoCoveredBy" ;
    schema:domainIncludes schema:GeospatialGeometry,
        schema:Place ;
    schema:rangeIncludes schema:GeospatialGeometry,
        schema:Place ;
    rdfs:comment "Represents a relationship between two geometries (or the places they represent), relating a geometry to another that covers it. As defined in <a href=\"https://en.wikipedia.org/wiki/DE-9IM\">DE-9IM</a>." .

schema:geoCovers a rdf:Property ;
    rdfs:label "geoCovers" ;
    schema:domainIncludes schema:GeospatialGeometry,
        schema:Place ;
    schema:rangeIncludes schema:GeospatialGeometry,
        schema:Place ;
    rdfs:comment "Represents a relationship between two geometries (or the places they represent), relating a covering geometry to a covered geometry. \"Every point of b is a point of (the interior or boundary of) a\". As defined in <a href=\"https://en.wikipedia.org/wiki/DE-9IM\">DE-9IM</a>." .

schema:geoCrosses a rdf:Property ;
    rdfs:label "geoCrosses" ;
    schema:domainIncludes schema:GeospatialGeometry,
        schema:Place ;
    schema:rangeIncludes schema:GeospatialGeometry,
        schema:Place ;
    rdfs:comment "Represents a relationship between two geometries (or the places they represent), relating a geometry to another that crosses it: \"a crosses b: they have some but not all interior points in common, and the dimension of the intersection is less than that of at least one of them\". As defined in <a href=\"https://en.wikipedia.org/wiki/DE-9IM\">DE-9IM</a>." .

schema:geoDisjoint a rdf:Property ;
    rdfs:label "geoDisjoint" ;
    schema:domainIncludes schema:GeospatialGeometry,
        schema:Place ;
    schema:rangeIncludes schema:GeospatialGeometry,
        schema:Place ;
    rdfs:comment "Represents spatial relations in which two geometries (or the places they represent) are topologically disjoint: they have no point in common. They form a set of disconnected geometries.\" (a symmetric relationship, as defined in <a href=\"https://en.wikipedia.org/wiki/DE-9IM\">DE-9IM</a>)" .

schema:geoEquals a rdf:Property ;
    rdfs:label "geoEquals" ;
    schema:domainIncludes schema:GeospatialGeometry,
        schema:Place ;
    schema:rangeIncludes schema:GeospatialGeometry,
        schema:Place ;
    rdfs:comment "Represents spatial relations in which two geometries (or the places they represent) are topologically equal, as defined in <a href=\"https://en.wikipedia.org/wiki/DE-9IM\">DE-9IM</a>. \"Two geometries are topologically equal if their interiors intersect and no part of the interior or boundary of one geometry intersects the exterior of the other\" (a symmetric relationship)" .

schema:geoIntersects a rdf:Property ;
    rdfs:label "geoIntersects" ;
    schema:domainIncludes schema:GeospatialGeometry,
        schema:Place ;
    schema:rangeIncludes schema:GeospatialGeometry,
        schema:Place ;
    rdfs:comment "Represents spatial relations in which two geometries (or the places they represent) have at least one point in common. As defined in <a href=\"https://en.wikipedia.org/wiki/DE-9IM\">DE-9IM</a>." .

schema:geoMidpoint a rdf:Property ;
    rdfs:label "geoMidpoint" ;
    schema:domainIncludes schema:GeoCircle ;
    schema:rangeIncludes schema:GeoCoordinates ;
    rdfs:comment "Indicates the GeoCoordinates at the centre of a GeoShape e.g. GeoCircle." .

schema:geoOverlaps a rdf:Property ;
    rdfs:label "geoOverlaps" ;
    schema:domainIncludes schema:GeospatialGeometry,
        schema:Place ;
    schema:rangeIncludes schema:GeospatialGeometry,
        schema:Place ;
    rdfs:comment "Represents a relationship between two geometries (or the places they represent), relating a geometry to another that geospatially overlaps it, i.e. they have some but not all points in common. As defined in <a href=\"https://en.wikipedia.org/wiki/DE-9IM\">DE-9IM</a>." .

schema:geoRadius a rdf:Property ;
    rdfs:label "geoRadius" ;
    schema:domainIncludes schema:GeoCircle ;
    schema:rangeIncludes schema:Distance,
        schema:Number,
        schema:Text ;
    rdfs:comment "Indicates the approximate radius of a GeoCircle (metres unless indicated otherwise via Distance notation)." .

schema:geoTouches a rdf:Property ;
    rdfs:label "geoTouches" ;
    schema:domainIncludes schema:GeospatialGeometry,
        schema:Place ;
    schema:rangeIncludes schema:GeospatialGeometry,
        schema:Place ;
    rdfs:comment "Represents spatial relations in which two geometries (or the places they represent) touch: they have at least one boundary point in common, but no interior points.\" (a symmetric relationship, as defined in <a href=\"https://en.wikipedia.org/wiki/DE-9IM\">DE-9IM</a> )" .

schema:geoWithin a rdf:Property ;
    rdfs:label "geoWithin" ;
    schema:domainIncludes schema:GeospatialGeometry,
        schema:Place ;
    schema:rangeIncludes schema:GeospatialGeometry,
        schema:Place ;
    rdfs:comment "Represents a relationship between two geometries (or the places they represent), relating a geometry to one that contains it, i.e. it is inside (i.e. within) its interior. As defined in <a href=\"https://en.wikipedia.org/wiki/DE-9IM\">DE-9IM</a>." .

schema:geographicArea a rdf:Property ;
    rdfs:label "geographicArea" ;
    schema:domainIncludes schema:Audience ;
    schema:rangeIncludes schema:AdministrativeArea ;
    rdfs:comment "The geographic area associated with the audience." .

schema:givenName a rdf:Property ;
    rdfs:label "givenName" ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Given name. In the U.S., the first name of a Person. This can be used along with familyName instead of the name property." .

schema:globalLocationNumber a rdf:Property ;
    rdfs:label "globalLocationNumber" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Organization,
        schema:Person,
        schema:Place ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The <a href=\"http://www.gs1.org/gln\">Global Location Number</a> (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations." ;
    rdfs:subPropertyOf schema:identifier .

schema:grantee a rdf:Property ;
    rdfs:label "grantee" ;
    schema:domainIncludes schema:DigitalDocumentPermission ;
    schema:rangeIncludes schema:Audience,
        schema:ContactPoint,
        schema:Organization,
        schema:Person ;
    rdfs:comment "The person, organization, contact point, or audience that has been granted this permission." .

schema:greater a rdf:Property ;
    rdfs:label "greater" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:QualitativeValue ;
    schema:rangeIncludes schema:QualitativeValue ;
    rdfs:comment "This ordering relation for qualitative values indicates that the subject is greater than the object." .

schema:greaterOrEqual a rdf:Property ;
    rdfs:label "greaterOrEqual" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:QualitativeValue ;
    schema:rangeIncludes schema:QualitativeValue ;
    rdfs:comment "This ordering relation for qualitative values indicates that the subject is greater than or equal to the object." .

schema:gtin12 a rdf:Property ;
    rdfs:label "gtin12" ;
    schema:domainIncludes schema:Demand,
        schema:Offer,
        schema:Product ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The GTIN-12 code of the product, or the product to which the offer refers. The GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company Prefix, Item Reference, and Check Digit used to identify trade items. See <a href=\"http://www.gs1.org/barcodes/technical/idkeys/gtin\">GS1 GTIN Summary</a> for more details." ;
    rdfs:subPropertyOf schema:identifier .

schema:gtin13 a rdf:Property ;
    rdfs:label "gtin13" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Demand,
        schema:Offer,
        schema:Product ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The GTIN-13 code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceeding zero. See <a href=\"http://www.gs1.org/barcodes/technical/idkeys/gtin\">GS1 GTIN Summary</a> for more details." ;
    rdfs:subPropertyOf schema:identifier .

schema:gtin14 a rdf:Property ;
    rdfs:label "gtin14" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Demand,
        schema:Offer,
        schema:Product ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The GTIN-14 code of the product, or the product to which the offer refers. See <a href=\"http://www.gs1.org/barcodes/technical/idkeys/gtin\">GS1 GTIN Summary</a> for more details." ;
    rdfs:subPropertyOf schema:identifier .

schema:gtin8 a rdf:Property ;
    rdfs:label "gtin8" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Demand,
        schema:Offer,
        schema:Product ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The <a href=\"http://apps.gs1.org/GDD/glossary/Pages/GTIN-8.aspx\">GTIN-8</a> code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See <a href=\"http://www.gs1.org/barcodes/technical/idkeys/gtin\">GS1 GTIN Summary</a> for more details." ;
    rdfs:subPropertyOf schema:identifier .

schema:hasCourseInstance a rdf:Property ;
    rdfs:label "hasCourseInstance" ;
    schema:domainIncludes schema:Course ;
    schema:rangeIncludes schema:CourseInstance ;
    rdfs:comment "An offering of the course at a specific time and place or through specific media or mode of study or to a specific section of students." .

schema:hasDeliveryMethod a rdf:Property ;
    rdfs:label "hasDeliveryMethod" ;
    schema:domainIncludes schema:DeliveryEvent,
        schema:ParcelDelivery ;
    schema:rangeIncludes schema:DeliveryMethod ;
    rdfs:comment "Method used for delivery or shipping." .

schema:hasDigitalDocumentPermission a rdf:Property ;
    rdfs:label "hasDigitalDocumentPermission" ;
    schema:domainIncludes schema:DigitalDocument ;
    schema:rangeIncludes schema:DigitalDocumentPermission ;
    rdfs:comment "A permission related to the access to this document (e.g. permission to read or write an electronic document). For a public document, specify a grantee with an Audience with audienceType equal to \"public\"." .

schema:hasMenuItem a rdf:Property ;
    rdfs:label "hasMenuItem" ;
    schema:domainIncludes schema:Menu,
        schema:MenuSection ;
    schema:rangeIncludes schema:MenuItem ;
    rdfs:comment "A food or drink item contained in a menu or menu section." .

schema:hasMenuSection a rdf:Property ;
    rdfs:label "hasMenuSection" ;
    schema:domainIncludes schema:Menu,
        schema:MenuSection ;
    schema:rangeIncludes schema:MenuSection ;
    rdfs:comment "A subgrouping of the menu (by dishes, course, serving time period, etc.)." .

schema:hasOccupation a rdf:Property ;
    rdfs:label "hasOccupation" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1698> ;
    schema:category "issue-1698" ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Occupation ;
    rdfs:comment "The Person's occupation. For past professions, use Role for expressing dates." .

schema:hasOfferCatalog a rdf:Property ;
    rdfs:label "hasOfferCatalog" ;
    schema:domainIncludes schema:Organization,
        schema:Person,
        schema:Service ;
    schema:rangeIncludes schema:OfferCatalog ;
    rdfs:comment "Indicates an OfferCatalog listing for this Organization, Person, or Service." .

schema:hasPOS a rdf:Property ;
    rdfs:label "hasPOS" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Organization,
        schema:Person ;
    schema:rangeIncludes schema:Place ;
    rdfs:comment "Points-of-Sales operated by the organization or person." .

schema:headline a rdf:Property ;
    rdfs:label "headline" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Headline of the article." .

schema:height a rdf:Property ;
    rdfs:label "height" ;
    schema:domainIncludes schema:MediaObject,
        schema:Person,
        schema:Product,
        schema:VisualArtwork ;
    schema:rangeIncludes schema:Distance,
        schema:QuantitativeValue ;
    rdfs:comment "The height of the item." .

schema:highPrice a rdf:Property ;
    rdfs:label "highPrice" ;
    schema:domainIncludes schema:AggregateOffer ;
    schema:rangeIncludes schema:Number,
        schema:Text ;
    rdfs:comment """The highest price of all offers available.<br/><br/>

Usage guidelines:<br/><br/>

<ul>
<li>Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.</li>
<li>Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.</li>
</ul>
""" .

schema:hiringOrganization a rdf:Property ;
    rdfs:label "hiringOrganization" ;
    schema:domainIncludes schema:JobPosting ;
    schema:rangeIncludes schema:Organization ;
    rdfs:comment "Organization offering the job position." .

schema:homeLocation a rdf:Property ;
    rdfs:label "homeLocation" ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:ContactPoint,
        schema:Place ;
    rdfs:comment "A contact location for a person's residence." ;
    rdfs:subPropertyOf schema:location .

schema:homeTeam a rdf:Property ;
    rdfs:label "homeTeam" ;
    schema:domainIncludes schema:SportsEvent ;
    schema:rangeIncludes schema:Person,
        schema:SportsTeam ;
    rdfs:comment "The home team in a sports event." ;
    rdfs:subPropertyOf schema:competitor .

schema:honorificPrefix a rdf:Property ;
    rdfs:label "honorificPrefix" ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "An honorific prefix preceding a Person's name such as Dr/Mrs/Mr." .

schema:honorificSuffix a rdf:Property ;
    rdfs:label "honorificSuffix" ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "An honorific suffix preceding a Person's name such as M.D. /PhD/MSCSW." .

schema:hostingOrganization a rdf:Property ;
    rdfs:label "hostingOrganization" ;
    schema:domainIncludes schema:ProgramMembership ;
    schema:rangeIncludes schema:Organization ;
    rdfs:comment "The organization (airline, travelers' club, etc.) the membership is made with." .

schema:hoursAvailable a rdf:Property ;
    rdfs:label "hoursAvailable" ;
    schema:domainIncludes schema:ContactPoint,
        schema:LocationFeatureSpecification,
        schema:Service ;
    schema:rangeIncludes schema:OpeningHoursSpecification ;
    rdfs:comment "The hours during which this service or contact is available." .

schema:httpMethod a rdf:Property ;
    rdfs:label "httpMethod" ;
    schema:domainIncludes schema:EntryPoint ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "An HTTP method that specifies the appropriate HTTP method for a request to an HTTP EntryPoint. Values are capitalized strings as used in HTTP." .

schema:iataCode a rdf:Property ;
    rdfs:label "iataCode" ;
    schema:domainIncludes schema:Airline,
        schema:Airport ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "IATA identifier for an airline or airport." .

schema:icaoCode a rdf:Property ;
    rdfs:label "icaoCode" ;
    schema:domainIncludes schema:Airport ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "ICAO identifier for an airport." .

schema:illustrator a rdf:Property ;
    rdfs:label "illustrator" ;
    schema:domainIncludes schema:Book ;
    schema:rangeIncludes schema:Person ;
    rdfs:comment "The illustrator of the book." .

schema:inAlbum a rdf:Property ;
    rdfs:label "inAlbum" ;
    schema:domainIncludes schema:MusicRecording ;
    schema:rangeIncludes schema:MusicAlbum ;
    rdfs:comment "The album to which this recording belongs." .

schema:inBroadcastLineup a rdf:Property ;
    rdfs:label "inBroadcastLineup" ;
    schema:domainIncludes schema:BroadcastChannel ;
    schema:rangeIncludes schema:CableOrSatelliteService ;
    rdfs:comment "The CableOrSatelliteService offering the channel." .

schema:inPlaylist a rdf:Property ;
    rdfs:label "inPlaylist" ;
    schema:domainIncludes schema:MusicRecording ;
    schema:rangeIncludes schema:MusicPlaylist ;
    rdfs:comment "The playlist to which this recording belongs." .

schema:incentives a rdf:Property ;
    rdfs:label "incentives" ;
    schema:domainIncludes schema:JobPosting ;
    schema:rangeIncludes schema:Text ;
    schema:supersededBy schema:incentiveCompensation ;
    rdfs:comment "Description of bonus and commission compensation aspects of the job." .

schema:includedComposition a rdf:Property ;
    rdfs:label "includedComposition" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    schema:domainIncludes schema:MusicComposition ;
    schema:rangeIncludes schema:MusicComposition ;
    rdfs:comment "Smaller compositions included in this work (e.g. a movement in a symphony)." .

schema:includedDataCatalog a rdf:Property ;
    rdfs:label "includedDataCatalog" ;
    schema:domainIncludes schema:Dataset ;
    schema:rangeIncludes schema:DataCatalog ;
    schema:supersededBy schema:includedInDataCatalog ;
    rdfs:comment "A data catalog which contains this dataset (this property was previously 'catalog', preferred name is now 'includedInDataCatalog')." .

schema:includesObject a rdf:Property ;
    rdfs:label "includesObject" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Demand,
        schema:Offer ;
    schema:rangeIncludes schema:TypeAndQuantityNode ;
    rdfs:comment "This links to a node or nodes indicating the exact quantity of the products included in the offer." .

schema:industry a rdf:Property ;
    rdfs:label "industry" ;
    schema:domainIncludes schema:JobPosting ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The industry associated with the job position." .

schema:ineligibleRegion a rdf:Property ;
    rdfs:label "ineligibleRegion" ;
    schema:domainIncludes schema:DeliveryChargeSpecification,
        schema:Demand,
        schema:Offer ;
    schema:rangeIncludes schema:GeoShape,
        schema:Place,
        schema:Text ;
    rdfs:comment """The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.<br/><br/>

See also <a class="localLink" href="http://schema.org/eligibleRegion">eligibleRegion</a>.""" .

schema:ingredients a rdf:Property ;
    rdfs:label "ingredients" ;
    schema:domainIncludes schema:Recipe ;
    schema:rangeIncludes schema:Text ;
    schema:supersededBy schema:recipeIngredient ;
    rdfs:comment "A single ingredient used in the recipe, e.g. sugar, flour or garlic." ;
    rdfs:subPropertyOf schema:supply .

schema:installUrl a rdf:Property ;
    rdfs:label "installUrl" ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:URL ;
    rdfs:comment "URL at which the app may be installed, if different from the URL of the item." .

schema:instructor a rdf:Property ;
    rdfs:label "instructor" ;
    schema:domainIncludes schema:CourseInstance ;
    schema:rangeIncludes schema:Person ;
    rdfs:comment "A person assigned to instruct or provide instructional assistance for the <a class=\"localLink\" href=\"http://schema.org/CourseInstance\">CourseInstance</a>." .

schema:interactionCount a rdf:Property ;
    rdfs:label "interactionCount" ;
    schema:supersededBy schema:interactionStatistic ;
    rdfs:comment "This property is deprecated, alongside the UserInteraction types on which it depended." .

schema:interactionService a rdf:Property ;
    rdfs:label "interactionService" ;
    schema:domainIncludes schema:InteractionCounter ;
    schema:rangeIncludes schema:SoftwareApplication,
        schema:WebSite ;
    rdfs:comment "The WebSite or SoftwareApplication where the interactions took place." .

schema:interactionType a rdf:Property ;
    rdfs:label "interactionType" ;
    schema:domainIncludes schema:InteractionCounter ;
    schema:rangeIncludes schema:Action ;
    rdfs:comment "The Action representing the type of interaction. For up votes, +1s, etc. use <a class=\"localLink\" href=\"http://schema.org/LikeAction\">LikeAction</a>. For down votes use <a class=\"localLink\" href=\"http://schema.org/DislikeAction\">DislikeAction</a>. Otherwise, use the most specific Action." .

schema:interactivityType a rdf:Property ;
    rdfs:label "interactivityType" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The predominant mode of learning supported by the learning resource. Acceptable values are 'active', 'expositive', or 'mixed'." .

schema:interestRate a rdf:Property ;
    rdfs:label "interestRate" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO> ;
    schema:domainIncludes schema:FinancialProduct ;
    schema:rangeIncludes schema:Number,
        schema:QuantitativeValue ;
    rdfs:comment "The interest rate, charged or paid, applicable to the financial product. Note: This is different from the calculated annualPercentageRate." .

schema:inventoryLevel a rdf:Property ;
    rdfs:label "inventoryLevel" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Demand,
        schema:Offer,
        schema:SomeProducts ;
    schema:rangeIncludes schema:QuantitativeValue ;
    rdfs:comment "The current approximate inventory level for the item or items." .

schema:isAccessoryOrSparePartFor a rdf:Property ;
    rdfs:label "isAccessoryOrSparePartFor" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Product ;
    schema:rangeIncludes schema:Product ;
    rdfs:comment "A pointer to another product (or multiple products) for which this product is an accessory or spare part." .

schema:isBasedOnUrl a rdf:Property ;
    rdfs:label "isBasedOnUrl" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:CreativeWork,
        schema:Product,
        schema:URL ;
    schema:supersededBy schema:isBasedOn ;
    rdfs:comment "A resource that was used in the creation of this resource. This term can be repeated for multiple sources. For example, http://example.com/great-multiplication-intro.html." .

schema:isConsumableFor a rdf:Property ;
    rdfs:label "isConsumableFor" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Product ;
    schema:rangeIncludes schema:Product ;
    rdfs:comment "A pointer to another product (or multiple products) for which this product is a consumable." .

schema:isFamilyFriendly a rdf:Property ;
    rdfs:label "isFamilyFriendly" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Boolean ;
    rdfs:comment "Indicates whether this content is family friendly." .

schema:isGift a rdf:Property ;
    rdfs:label "isGift" ;
    schema:domainIncludes schema:Order ;
    schema:rangeIncludes schema:Boolean ;
    rdfs:comment "Was the offer accepted as a gift for someone other than the buyer." .

schema:isLiveBroadcast a rdf:Property ;
    rdfs:label "isLiveBroadcast" ;
    schema:domainIncludes schema:BroadcastEvent ;
    schema:rangeIncludes schema:Boolean ;
    rdfs:comment "True is the broadcast is of a live event." .

schema:isRelatedTo a rdf:Property ;
    rdfs:label "isRelatedTo" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Product,
        schema:Service ;
    schema:rangeIncludes schema:Product,
        schema:Service ;
    rdfs:comment "A pointer to another, somehow related product (or multiple products)." .

schema:isSimilarTo a rdf:Property ;
    rdfs:label "isSimilarTo" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Product,
        schema:Service ;
    schema:rangeIncludes schema:Product,
        schema:Service ;
    rdfs:comment "A pointer to another, functionally similar product (or multiple products)." .

schema:isVariantOf a rdf:Property ;
    rdfs:label "isVariantOf" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:ProductModel ;
    schema:rangeIncludes schema:ProductModel ;
    rdfs:comment "A pointer to a base product from which this product is a variant. It is safe to infer that the variant inherits all product features from the base model, unless defined locally. This is not transitive." .

schema:isbn a rdf:Property ;
    rdfs:label "isbn" ;
    schema:domainIncludes schema:Book ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The ISBN of the book." ;
    rdfs:subPropertyOf schema:identifier ;
    owl:equivalentProperty bibo:isbn .

schema:isicV4 a rdf:Property ;
    rdfs:label "isicV4" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Organization,
        schema:Person,
        schema:Place ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place." .

schema:isrcCode a rdf:Property ;
    rdfs:label "isrcCode" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    schema:domainIncludes schema:MusicRecording ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The International Standard Recording Code for the recording." .

schema:issn a rdf:Property ;
    rdfs:label "issn" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex> ;
    schema:domainIncludes schema:Blog,
        schema:CreativeWorkSeries,
        schema:Dataset,
        schema:WebSite ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The International Standard Serial Number (ISSN) that identifies this serial publication. You can repeat this property to identify different formats of, or the linking ISSN (ISSN-L) for, this serial publication." ;
    rdfs:subPropertyOf schema:identifier ;
    owl:equivalentProperty bibo:issn .

schema:issueNumber a rdf:Property ;
    rdfs:label "issueNumber" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex> ;
    schema:domainIncludes schema:PublicationIssue ;
    schema:rangeIncludes schema:Integer,
        schema:Text ;
    rdfs:comment "Identifies the issue of publication; for example, \"iii\" or \"2\"." ;
    rdfs:subPropertyOf schema:position ;
    owl:equivalentProperty bibo:issue .

schema:issuedBy a rdf:Property ;
    rdfs:label "issuedBy" ;
    schema:domainIncludes schema:Permit,
        schema:Ticket ;
    schema:rangeIncludes schema:Organization ;
    rdfs:comment "The organization issuing the ticket or permit." .

schema:issuedThrough a rdf:Property ;
    rdfs:label "issuedThrough" ;
    schema:domainIncludes schema:Permit ;
    schema:rangeIncludes schema:Service ;
    rdfs:comment "The service through with the permit was granted." .

schema:iswcCode a rdf:Property ;
    rdfs:label "iswcCode" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    schema:domainIncludes schema:MusicComposition ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The International Standard Musical Work Code for the composition." .

schema:item a rdf:Property ;
    rdfs:label "item" ;
    schema:domainIncludes schema:DataFeedItem,
        schema:ListItem ;
    schema:rangeIncludes schema:Thing ;
    rdfs:comment "An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists')’." .

schema:itemCondition a rdf:Property ;
    rdfs:label "itemCondition" ;
    schema:domainIncludes schema:Demand,
        schema:Offer,
        schema:Product ;
    schema:rangeIncludes schema:OfferItemCondition ;
    rdfs:comment "A predefined value from OfferItemCondition or a textual description of the condition of the product or service, or the products or services included in the offer." .

schema:itemListElement a rdf:Property ;
    rdfs:label "itemListElement" ;
    schema:domainIncludes schema:ItemList ;
    schema:rangeIncludes schema:ListItem,
        schema:Text,
        schema:Thing ;
    rdfs:comment """For itemListElement values, you can use simple strings (e.g. "Peter", "Paul", "Mary"), existing entities, or use ListItem.<br/><br/>

Text values are best if the elements in the list are plain strings. Existing entities are best for a simple, unordered list of existing things in your data. ListItem is used with ordered lists when you want to provide additional context about the element in that list or when the same item might be in different places in different lists.<br/><br/>

Note: The order of elements in your mark-up is not sufficient for indicating the order or elements.  Use ListItem with a 'position' property in such cases.""" .

schema:itemListOrder a rdf:Property ;
    rdfs:label "itemListOrder" ;
    schema:domainIncludes schema:ItemList ;
    schema:rangeIncludes schema:ItemListOrderType,
        schema:Text ;
    rdfs:comment "Type of ordering (e.g. Ascending, Descending, Unordered)." .

schema:itemOffered a rdf:Property ;
    rdfs:label "itemOffered" ;
    schema:domainIncludes schema:Demand,
        schema:Offer ;
    schema:rangeIncludes schema:Product,
        schema:Service ;
    rdfs:comment "The item being offered." .

schema:itemReviewed a rdf:Property ;
    rdfs:label "itemReviewed" ;
    schema:domainIncludes schema:AggregateRating,
        schema:Review ;
    schema:rangeIncludes schema:Thing ;
    rdfs:comment "The item that is being reviewed/rated." .

schema:itemShipped a rdf:Property ;
    rdfs:label "itemShipped" ;
    schema:domainIncludes schema:ParcelDelivery ;
    schema:rangeIncludes schema:Product ;
    rdfs:comment "Item(s) being shipped." .

schema:jobLocation a rdf:Property ;
    rdfs:label "jobLocation" ;
    schema:domainIncludes schema:JobPosting ;
    schema:rangeIncludes schema:Place ;
    rdfs:comment "A (typically single) geographic location associated with the job position." .

schema:keywords a rdf:Property ;
    rdfs:label "keywords" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Keywords or tags used to describe this content. Multiple entries in a keywords list are typically delimited by commas." .

schema:knownVehicleDamages a rdf:Property ;
    rdfs:label "knownVehicleDamages" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "A textual description of known damages, both repaired and unrepaired." .

schema:knows a rdf:Property ;
    rdfs:label "knows" ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Person ;
    rdfs:comment "The most generic bi-directional social/work relation." .

schema:landlord a rdf:Property ;
    rdfs:label "landlord" ;
    schema:domainIncludes schema:RentAction ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    rdfs:comment "A sub property of participant. The owner of the real estate property." ;
    rdfs:subPropertyOf schema:participant .

schema:language a rdf:Property ;
    rdfs:label "language" ;
    schema:domainIncludes schema:CommunicateAction,
        schema:WriteAction ;
    schema:rangeIncludes schema:Language ;
    schema:supersededBy schema:inLanguage ;
    rdfs:comment "A sub property of instrument. The language used on this action." ;
    rdfs:subPropertyOf schema:instrument .

schema:lastReviewed a rdf:Property ;
    rdfs:label "lastReviewed" ;
    schema:domainIncludes schema:WebPage ;
    schema:rangeIncludes schema:Date ;
    rdfs:comment "Date on which the content on this web page was last reviewed for accuracy and/or completeness." .

schema:latitude a rdf:Property ;
    rdfs:label "latitude" ;
    schema:domainIncludes schema:GeoCoordinates ;
    schema:rangeIncludes schema:Number,
        schema:Text ;
    rdfs:comment "The latitude of a location. For example <code>37.42242</code> (<a href=\"https://en.wikipedia.org/wiki/World_Geodetic_System\">WGS 84</a>)." .

schema:learningResourceType a rdf:Property ;
    rdfs:label "learningResourceType" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The predominant type or kind characterizing the learning resource. For example, 'presentation', 'handout'." .

schema:legalName a rdf:Property ;
    rdfs:label "legalName" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Organization ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The official name of the organization, e.g. the registered company name." .

schema:leiCode a rdf:Property ;
    rdfs:label "leiCode" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO>,
        <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#GLEIF> ;
    schema:domainIncludes schema:Organization ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "An organization identifier that uniquely identifies a legal entity as defined in ISO 17442." ;
    rdfs:subPropertyOf schema:identifier .

schema:lender a rdf:Property ;
    rdfs:label "lender" ;
    schema:domainIncludes schema:BorrowAction ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    rdfs:comment "A sub property of participant. The person that lends the object being borrowed." ;
    rdfs:subPropertyOf schema:participant .

schema:lesser a rdf:Property ;
    rdfs:label "lesser" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:QualitativeValue ;
    schema:rangeIncludes schema:QualitativeValue ;
    rdfs:comment "This ordering relation for qualitative values indicates that the subject is lesser than the object." .

schema:lesserOrEqual a rdf:Property ;
    rdfs:label "lesserOrEqual" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:QualitativeValue ;
    schema:rangeIncludes schema:QualitativeValue ;
    rdfs:comment "This ordering relation for qualitative values indicates that the subject is lesser than or equal to the object." .

schema:license a rdf:Property ;
    rdfs:label "license" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:CreativeWork,
        schema:URL ;
    rdfs:comment "A license document that applies to this content, typically indicated by URL." .

schema:line a rdf:Property ;
    rdfs:label "line" ;
    schema:domainIncludes schema:GeoShape ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "A line is a point-to-point path consisting of two or more points. A line is expressed as a series of two or more point objects separated by space." .

schema:liveBlogUpdate a rdf:Property ;
    rdfs:label "liveBlogUpdate" ;
    schema:domainIncludes schema:LiveBlogPosting ;
    schema:rangeIncludes schema:BlogPosting ;
    rdfs:comment "An update to the LiveBlog." .

schema:loanTerm a rdf:Property ;
    rdfs:label "loanTerm" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO> ;
    schema:domainIncludes schema:LoanOrCredit ;
    schema:rangeIncludes schema:QuantitativeValue ;
    rdfs:comment "The duration of the loan or credit agreement." ;
    rdfs:subPropertyOf schema:duration .

schema:locationCreated a rdf:Property ;
    rdfs:label "locationCreated" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Place ;
    rdfs:comment "The location where the CreativeWork was created, which may not be the same as the location depicted in the CreativeWork." .

schema:lodgingUnitDescription a rdf:Property ;
    rdfs:label "lodgingUnitDescription" ;
    schema:domainIncludes schema:LodgingReservation ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "A full description of the lodging unit." .

schema:lodgingUnitType a rdf:Property ;
    rdfs:label "lodgingUnitType" ;
    schema:domainIncludes schema:LodgingReservation ;
    schema:rangeIncludes schema:QualitativeValue,
        schema:Text ;
    rdfs:comment "Textual description of the unit type (including suite vs. room, size of bed, etc.)." .

schema:logo a rdf:Property ;
    rdfs:label "logo" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Brand,
        schema:Organization,
        schema:Place,
        schema:Product,
        schema:Service ;
    schema:rangeIncludes schema:ImageObject,
        schema:URL ;
    rdfs:comment "An associated logo." ;
    rdfs:subPropertyOf schema:image .

schema:longitude a rdf:Property ;
    rdfs:label "longitude" ;
    schema:domainIncludes schema:GeoCoordinates ;
    schema:rangeIncludes schema:Number,
        schema:Text ;
    rdfs:comment "The longitude of a location. For example <code>-122.08585</code> (<a href=\"https://en.wikipedia.org/wiki/World_Geodetic_System\">WGS 84</a>)." .

schema:loser a rdf:Property ;
    rdfs:label "loser" ;
    schema:domainIncludes schema:WinAction ;
    schema:rangeIncludes schema:Person ;
    rdfs:comment "A sub property of participant. The loser of the action." ;
    rdfs:subPropertyOf schema:participant .

schema:lowPrice a rdf:Property ;
    rdfs:label "lowPrice" ;
    schema:domainIncludes schema:AggregateOffer ;
    schema:rangeIncludes schema:Number,
        schema:Text ;
    rdfs:comment """The lowest price of all offers available.<br/><br/>

Usage guidelines:<br/><br/>

<ul>
<li>Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.</li>
<li>Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.</li>
</ul>
""" .

schema:lyricist a rdf:Property ;
    rdfs:label "lyricist" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    schema:domainIncludes schema:MusicComposition ;
    schema:rangeIncludes schema:Person ;
    rdfs:comment "The person who wrote the words." .

schema:lyrics a rdf:Property ;
    rdfs:label "lyrics" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    schema:domainIncludes schema:MusicComposition ;
    schema:rangeIncludes schema:CreativeWork ;
    rdfs:comment "The words in the song." .

schema:mainContentOfPage a rdf:Property ;
    rdfs:label "mainContentOfPage" ;
    schema:domainIncludes schema:WebPage ;
    schema:rangeIncludes schema:WebPageElement ;
    rdfs:comment "Indicates if this web page element is the main subject of the page." .

schema:manufacturer a rdf:Property ;
    rdfs:label "manufacturer" ;
    schema:domainIncludes schema:DietarySupplement,
        schema:Drug,
        schema:Product ;
    schema:rangeIncludes schema:Organization ;
    rdfs:comment "The manufacturer of the product." .

schema:map a rdf:Property ;
    rdfs:label "map" ;
    schema:domainIncludes schema:Place ;
    schema:rangeIncludes schema:URL ;
    schema:supersededBy schema:hasMap ;
    rdfs:comment "A URL to a map of the place." .

schema:mapType a rdf:Property ;
    rdfs:label "mapType" ;
    schema:domainIncludes schema:Map ;
    schema:rangeIncludes schema:MapCategoryType ;
    rdfs:comment "Indicates the kind of Map, from the MapCategoryType Enumeration." .

schema:maps a rdf:Property ;
    rdfs:label "maps" ;
    schema:domainIncludes schema:Place ;
    schema:rangeIncludes schema:URL ;
    schema:supersededBy schema:hasMap ;
    rdfs:comment "A URL to a map of the place." .

schema:maxPrice a rdf:Property ;
    rdfs:label "maxPrice" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:PriceSpecification ;
    schema:rangeIncludes schema:Number ;
    rdfs:comment "The highest price if the price is a range." .

schema:maxValue a rdf:Property ;
    rdfs:label "maxValue" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:MonetaryAmount,
        schema:PropertyValue,
        schema:PropertyValueSpecification,
        schema:QuantitativeValue ;
    schema:rangeIncludes schema:Number ;
    rdfs:comment "The upper value of some characteristic or property." .

schema:maximumAttendeeCapacity a rdf:Property ;
    rdfs:label "maximumAttendeeCapacity" ;
    schema:domainIncludes schema:Event,
        schema:Place ;
    schema:rangeIncludes schema:Integer ;
    rdfs:comment "The total number of individuals that may attend an event or venue." .

schema:mealService a rdf:Property ;
    rdfs:label "mealService" ;
    schema:domainIncludes schema:Flight ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Description of the meals that will be provided or available for purchase." .

schema:median a rdf:Property ;
    rdfs:label "median" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1698> ;
    schema:category "issue-1698" ;
    schema:domainIncludes schema:QuantitativeValueDistribution ;
    schema:rangeIncludes schema:Number ;
    rdfs:comment "The median value." .

schema:members a rdf:Property ;
    rdfs:label "members" ;
    schema:domainIncludes schema:Organization,
        schema:ProgramMembership ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    schema:supersededBy schema:member ;
    rdfs:comment "A member of this organization." .

schema:membershipNumber a rdf:Property ;
    rdfs:label "membershipNumber" ;
    schema:domainIncludes schema:ProgramMembership ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "A unique identifier for the membership." .

schema:memoryRequirements a rdf:Property ;
    rdfs:label "memoryRequirements" ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    rdfs:comment "Minimum memory requirements." .

schema:mentions a rdf:Property ;
    rdfs:label "mentions" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Thing ;
    rdfs:comment "Indicates that the CreativeWork contains a reference to, but is not necessarily about a concept." .

schema:menu a rdf:Property ;
    rdfs:label "menu" ;
    schema:domainIncludes schema:FoodEstablishment ;
    schema:rangeIncludes schema:Menu,
        schema:Text,
        schema:URL ;
    schema:supersededBy schema:hasMenu ;
    rdfs:comment "Either the actual menu as a structured representation, as text, or a URL of the menu." .

schema:menuAddOn a rdf:Property ;
    rdfs:label "menuAddOn" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1541> ;
    schema:category "issue-1541" ;
    schema:domainIncludes schema:MenuItem ;
    schema:rangeIncludes schema:MenuItem,
        schema:MenuSection ;
    rdfs:comment "Additional menu item(s) such as a side dish of salad or side order of fries that can be added to this menu item. Additionally it can be a menu section containing allowed add-on menu items for this menu item." .

schema:merchant a rdf:Property ;
    rdfs:label "merchant" ;
    schema:domainIncludes schema:Order ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    schema:supersededBy schema:seller ;
    rdfs:comment "'merchant' is an out-dated term for 'seller'." .

schema:messageAttachment a rdf:Property ;
    rdfs:label "messageAttachment" ;
    schema:domainIncludes schema:Message ;
    schema:rangeIncludes schema:CreativeWork ;
    rdfs:comment "A CreativeWork attached to the message." .

schema:mileageFromOdometer a rdf:Property ;
    rdfs:label "mileageFromOdometer" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:QuantitativeValue ;
    rdfs:comment """The total distance travelled by the particular vehicle since its initial production, as read from its odometer.<br/><br/>

Typical unit code(s): KMT for kilometers, SMI for statute miles""" .

schema:minPrice a rdf:Property ;
    rdfs:label "minPrice" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:PriceSpecification ;
    schema:rangeIncludes schema:Number ;
    rdfs:comment "The lowest price if the price is a range." .

schema:minValue a rdf:Property ;
    rdfs:label "minValue" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:MonetaryAmount,
        schema:PropertyValue,
        schema:PropertyValueSpecification,
        schema:QuantitativeValue ;
    schema:rangeIncludes schema:Number ;
    rdfs:comment "The lower value of some characteristic or property." .

schema:minimumPaymentDue a rdf:Property ;
    rdfs:label "minimumPaymentDue" ;
    schema:domainIncludes schema:Invoice ;
    schema:rangeIncludes schema:MonetaryAmount,
        schema:PriceSpecification ;
    rdfs:comment "The minimum payment required at this time." .

schema:model a rdf:Property ;
    rdfs:label "model" ;
    schema:domainIncludes schema:Product ;
    schema:rangeIncludes schema:ProductModel,
        schema:Text ;
    rdfs:comment "The model of the product. Use with the URL of a ProductModel or a textual representation of the model identifier. The URL of the ProductModel can be from an external source. It is recommended to additionally provide strong product identifiers via the gtin8/gtin13/gtin14 and mpn properties." .

schema:modifiedTime a rdf:Property ;
    rdfs:label "modifiedTime" ;
    schema:domainIncludes schema:Reservation ;
    schema:rangeIncludes schema:DateTime ;
    rdfs:comment "The date and time the reservation was modified." .

schema:mpn a rdf:Property ;
    rdfs:label "mpn" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Demand,
        schema:Offer,
        schema:Product ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers." .

schema:multipleValues a rdf:Property ;
    rdfs:label "multipleValues" ;
    schema:domainIncludes schema:PropertyValueSpecification ;
    schema:rangeIncludes schema:Boolean ;
    rdfs:comment "Whether multiple values are allowed for the property.  Default is false." .

schema:musicArrangement a rdf:Property ;
    rdfs:label "musicArrangement" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    schema:domainIncludes schema:MusicComposition ;
    schema:rangeIncludes schema:MusicComposition ;
    rdfs:comment "An arrangement derived from the composition." .

schema:musicBy a rdf:Property ;
    rdfs:label "musicBy" ;
    schema:domainIncludes schema:Clip,
        schema:Episode,
        schema:Movie,
        schema:MovieSeries,
        schema:RadioSeries,
        schema:TVSeries,
        schema:VideoGame,
        schema:VideoGameSeries,
        schema:VideoObject ;
    schema:rangeIncludes schema:MusicGroup,
        schema:Person ;
    rdfs:comment "The composer of the soundtrack." .

schema:musicCompositionForm a rdf:Property ;
    rdfs:label "musicCompositionForm" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    schema:domainIncludes schema:MusicComposition ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The type of composition (e.g. overture, sonata, symphony, etc.)." .

schema:musicGroupMember a rdf:Property ;
    rdfs:label "musicGroupMember" ;
    schema:domainIncludes schema:MusicGroup ;
    schema:rangeIncludes schema:Person ;
    schema:supersededBy schema:member ;
    rdfs:comment "A member of a music group&#x2014;for example, John, Paul, George, or Ringo." .

schema:musicReleaseFormat a rdf:Property ;
    rdfs:label "musicReleaseFormat" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    schema:domainIncludes schema:MusicRelease ;
    schema:rangeIncludes schema:MusicReleaseFormatType ;
    rdfs:comment "Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.)." .

schema:musicalKey a rdf:Property ;
    rdfs:label "musicalKey" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    schema:domainIncludes schema:MusicComposition ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The key, mode, or scale this composition uses." .

schema:naics a rdf:Property ;
    rdfs:label "naics" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Organization,
        schema:Person ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The North American Industry Classification System (NAICS) code for a particular organization or business person." .

schema:name a rdf:Property ;
    rdfs:label "name" ;
    schema:domainIncludes schema:Thing ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The name of the item." ;
    rdfs:subPropertyOf <rdfs:label> ;
    owl:equivalentProperty dct:title .

schema:namedPosition a rdf:Property ;
    rdfs:label "namedPosition" ;
    schema:domainIncludes schema:Role ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    schema:supersededBy schema:roleName ;
    rdfs:comment "A position played, performed or filled by a person or organization, as part of an organization. For example, an athlete in a SportsTeam might play in the position named 'Quarterback'." .

schema:nationality a rdf:Property ;
    rdfs:label "nationality" ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Country ;
    rdfs:comment "Nationality of the person." .

schema:netWorth a rdf:Property ;
    rdfs:label "netWorth" ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:MonetaryAmount,
        schema:PriceSpecification ;
    rdfs:comment "The total financial value of the person as calculated by subtracting assets from liabilities." .

schema:nextItem a rdf:Property ;
    rdfs:label "nextItem" ;
    schema:domainIncludes schema:ListItem ;
    schema:rangeIncludes schema:ListItem ;
    rdfs:comment "A link to the ListItem that follows the current one." .

schema:nonEqual a rdf:Property ;
    rdfs:label "nonEqual" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:QualitativeValue ;
    schema:rangeIncludes schema:QualitativeValue ;
    rdfs:comment "This ordering relation for qualitative values indicates that the subject is not equal to the object." .

schema:numAdults a rdf:Property ;
    rdfs:label "numAdults" ;
    schema:domainIncludes schema:LodgingReservation ;
    schema:rangeIncludes schema:Integer,
        schema:QuantitativeValue ;
    rdfs:comment "The number of adults staying in the unit." .

schema:numChildren a rdf:Property ;
    rdfs:label "numChildren" ;
    schema:domainIncludes schema:LodgingReservation ;
    schema:rangeIncludes schema:Integer,
        schema:QuantitativeValue ;
    rdfs:comment "The number of children staying in the unit." .

schema:numTracks a rdf:Property ;
    rdfs:label "numTracks" ;
    schema:domainIncludes schema:MusicPlaylist ;
    schema:rangeIncludes schema:Integer ;
    rdfs:comment "The number of tracks in this album or playlist." .

schema:numberOfAirbags a rdf:Property ;
    rdfs:label "numberOfAirbags" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:Number,
        schema:Text ;
    rdfs:comment "The number or type of airbags in the vehicle." .

schema:numberOfAxles a rdf:Property ;
    rdfs:label "numberOfAxles" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:Number,
        schema:QuantitativeValue ;
    rdfs:comment """The number of axles.<br/><br/>

Typical unit code(s): C62""" .

schema:numberOfBeds a rdf:Property ;
    rdfs:label "numberOfBeds" ;
    dct:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> ;
    schema:domainIncludes schema:BedDetails ;
    schema:rangeIncludes schema:Number ;
    rdfs:comment "The quantity of the given bed type available in the HotelRoom, Suite, House, or Apartment." .

schema:numberOfDoors a rdf:Property ;
    rdfs:label "numberOfDoors" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:Number,
        schema:QuantitativeValue ;
    rdfs:comment """The number of doors.<br/><br/>

Typical unit code(s): C62""" .

schema:numberOfEmployees a rdf:Property ;
    rdfs:label "numberOfEmployees" ;
    schema:domainIncludes schema:BusinessAudience,
        schema:Organization ;
    schema:rangeIncludes schema:QuantitativeValue ;
    rdfs:comment "The number of employees in an organization e.g. business." .

schema:numberOfEpisodes a rdf:Property ;
    rdfs:label "numberOfEpisodes" ;
    schema:domainIncludes schema:CreativeWorkSeason,
        schema:RadioSeries,
        schema:TVSeries,
        schema:VideoGameSeries ;
    schema:rangeIncludes schema:Integer ;
    rdfs:comment "The number of episodes in this season or series." .

schema:numberOfForwardGears a rdf:Property ;
    rdfs:label "numberOfForwardGears" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:Number,
        schema:QuantitativeValue ;
    rdfs:comment """The total number of forward gears available for the transmission system of the vehicle.<br/><br/>

Typical unit code(s): C62""" .

schema:numberOfItems a rdf:Property ;
    rdfs:label "numberOfItems" ;
    schema:domainIncludes schema:ItemList ;
    schema:rangeIncludes schema:Integer ;
    rdfs:comment "The number of items in an ItemList. Note that some descriptions might not fully describe all items in a list (e.g., multi-page pagination); in such cases, the numberOfItems would be for the entire list." .

schema:numberOfPages a rdf:Property ;
    rdfs:label "numberOfPages" ;
    schema:domainIncludes schema:Book ;
    schema:rangeIncludes schema:Integer ;
    rdfs:comment "The number of pages in the book." .

schema:numberOfPlayers a rdf:Property ;
    rdfs:label "numberOfPlayers" ;
    schema:domainIncludes schema:Game,
        schema:VideoGameSeries ;
    schema:rangeIncludes schema:QuantitativeValue ;
    rdfs:comment "Indicate how many people can play this game (minimum, maximum, or range)." .

schema:numberOfPreviousOwners a rdf:Property ;
    rdfs:label "numberOfPreviousOwners" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:Number,
        schema:QuantitativeValue ;
    rdfs:comment """The number of owners of the vehicle, including the current one.<br/><br/>

Typical unit code(s): C62""" .

schema:numberOfRooms a rdf:Property ;
    rdfs:label "numberOfRooms" ;
    dct:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> ;
    schema:domainIncludes schema:Accommodation,
        schema:Apartment,
        schema:House,
        schema:LodgingBusiness,
        schema:SingleFamilyResidence,
        schema:Suite ;
    schema:rangeIncludes schema:Number,
        schema:QuantitativeValue ;
    rdfs:comment """The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business.
Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue.""" .

schema:numberOfSeasons a rdf:Property ;
    rdfs:label "numberOfSeasons" ;
    schema:domainIncludes schema:RadioSeries,
        schema:TVSeries,
        schema:VideoGameSeries ;
    schema:rangeIncludes schema:Integer ;
    rdfs:comment "The number of seasons in this series." .

schema:numberedPosition a rdf:Property ;
    rdfs:label "numberedPosition" ;
    schema:domainIncludes schema:OrganizationRole ;
    schema:rangeIncludes schema:Number ;
    rdfs:comment "A number associated with a role in an organization, for example, the number on an athlete's jersey." .

schema:nutrition a rdf:Property ;
    rdfs:label "nutrition" ;
    schema:domainIncludes schema:MenuItem,
        schema:Recipe ;
    schema:rangeIncludes schema:NutritionInformation ;
    rdfs:comment "Nutrition information about the recipe or menu item." .

schema:occupancy a rdf:Property ;
    rdfs:label "occupancy" ;
    dct:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> ;
    schema:domainIncludes schema:Apartment,
        schema:HotelRoom,
        schema:SingleFamilyResidence,
        schema:Suite ;
    schema:rangeIncludes schema:QuantitativeValue ;
    rdfs:comment """The allowed total occupancy for the accommodation in persons (including infants etc). For individual accommodations, this is not necessarily the legal maximum but defines the permitted usage as per the contractual agreement (e.g. a double room used by a single person).
Typical unit code(s): C62 for person""" .

schema:occupationLocation a rdf:Property ;
    rdfs:label "occupationLocation" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1698> ;
    schema:category "issue-1698" ;
    schema:domainIncludes schema:Occupation ;
    schema:rangeIncludes schema:AdministrativeArea ;
    rdfs:comment "The region/country for which this occupational description is appropriate. Note that educational requirements and qualifications can vary between jurisdictions." .

schema:occupationalCategory a rdf:Property ;
    rdfs:label "occupationalCategory" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1698>,
        <https://github.com/schemaorg/schemaorg/issues/2192> ;
    schema:category "issue-1698",
        "issue-2192" ;
    schema:domainIncludes schema:JobPosting,
        schema:Occupation ;
    schema:rangeIncludes schema:CategoryCode,
        schema:Text ;
    rdfs:comment """A category describing the job, preferably using a term from a taxonomy such as <a href="http://www.onetcenter.org/taxonomy.html">BLS O*NET-SOC</a>, <a href="https://www.ilo.org/public/english/bureau/stat/isco/isco08/">ISCO-08</a> or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.<br/><br/>

Note: for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.""" .

schema:offerCount a rdf:Property ;
    rdfs:label "offerCount" ;
    schema:domainIncludes schema:AggregateOffer ;
    schema:rangeIncludes schema:Integer ;
    rdfs:comment "The number of offers for the product." .

schema:offers a rdf:Property ;
    rdfs:label "offers" ;
    schema:domainIncludes schema:AggregateOffer,
        schema:CreativeWork,
        schema:Event,
        schema:MenuItem,
        schema:Product,
        schema:Service,
        schema:Trip ;
    schema:rangeIncludes schema:Offer ;
    rdfs:comment "An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event." .

schema:openingHours a rdf:Property ;
    rdfs:label "openingHours" ;
    schema:domainIncludes schema:CivicStructure,
        schema:LocalBusiness ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment """The general opening hours for a business. Opening hours can be specified as a weekly time range, starting with days, then times per day. Multiple days can be listed with commas ',' separating each day. Day or time ranges are specified using a hyphen '-'.<br/><br/>

<ul>
<li>Days are specified using the following two-letter combinations: <code>Mo</code>, <code>Tu</code>, <code>We</code>, <code>Th</code>, <code>Fr</code>, <code>Sa</code>, <code>Su</code>.</li>
<li>Times are specified using 24:00 time. For example, 3pm is specified as <code>15:00</code>. </li>
<li>Here is an example: <code>&lt;time itemprop="openingHours" datetime=&quot;Tu,Th 16:00-20:00&quot;&gt;Tuesdays and Thursdays 4-8pm&lt;/time&gt;</code>.</li>
<li>If a business is open 7 days a week, then it can be specified as <code>&lt;time itemprop=&quot;openingHours&quot; datetime=&quot;Mo-Su&quot;&gt;Monday through Sunday, all day&lt;/time&gt;</code>.</li>
</ul>
""" .

schema:openingHoursSpecification a rdf:Property ;
    rdfs:label "openingHoursSpecification" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Place ;
    schema:rangeIncludes schema:OpeningHoursSpecification ;
    rdfs:comment "The opening hours of a certain place." .

schema:opens a rdf:Property ;
    rdfs:label "opens" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:OpeningHoursSpecification ;
    schema:rangeIncludes schema:Time ;
    rdfs:comment "The opening hour of the place or service on the given day(s) of the week." .

schema:operatingSystem a rdf:Property ;
    rdfs:label "operatingSystem" ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Operating systems supported (Windows 7, OSX 10.6, Android 1.6)." .

schema:opponent a rdf:Property ;
    rdfs:label "opponent" ;
    schema:domainIncludes schema:ExerciseAction ;
    schema:rangeIncludes schema:Person ;
    rdfs:comment "A sub property of participant. The opponent on this action." ;
    rdfs:subPropertyOf schema:participant .

schema:option a rdf:Property ;
    rdfs:label "option" ;
    schema:domainIncludes schema:ChooseAction ;
    schema:rangeIncludes schema:Text,
        schema:Thing ;
    schema:supersededBy schema:actionOption ;
    rdfs:comment "A sub property of object. The options subject to this action." ;
    rdfs:subPropertyOf schema:object .

schema:orderDate a rdf:Property ;
    rdfs:label "orderDate" ;
    schema:domainIncludes schema:Order ;
    schema:rangeIncludes schema:DateTime ;
    rdfs:comment "Date order was placed." .

schema:orderDelivery a rdf:Property ;
    rdfs:label "orderDelivery" ;
    schema:domainIncludes schema:Order,
        schema:OrderItem ;
    schema:rangeIncludes schema:ParcelDelivery ;
    rdfs:comment "The delivery of the parcel related to this order or order item." .

schema:orderItemNumber a rdf:Property ;
    rdfs:label "orderItemNumber" ;
    schema:domainIncludes schema:OrderItem ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The identifier of the order item." .

schema:orderItemStatus a rdf:Property ;
    rdfs:label "orderItemStatus" ;
    schema:domainIncludes schema:OrderItem ;
    schema:rangeIncludes schema:OrderStatus ;
    rdfs:comment "The current status of the order item." .

schema:orderNumber a rdf:Property ;
    rdfs:label "orderNumber" ;
    schema:domainIncludes schema:Order ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The identifier of the transaction." ;
    rdfs:subPropertyOf schema:identifier .

schema:orderQuantity a rdf:Property ;
    rdfs:label "orderQuantity" ;
    schema:domainIncludes schema:OrderItem ;
    schema:rangeIncludes schema:Number ;
    rdfs:comment "The number of the item ordered. If the property is not set, assume the quantity is one." .

schema:orderStatus a rdf:Property ;
    rdfs:label "orderStatus" ;
    schema:domainIncludes schema:Order ;
    schema:rangeIncludes schema:OrderStatus ;
    rdfs:comment "The current status of the order." .

schema:orderedItem a rdf:Property ;
    rdfs:label "orderedItem" ;
    schema:domainIncludes schema:Order,
        schema:OrderItem ;
    schema:rangeIncludes schema:OrderItem,
        schema:Product,
        schema:Service ;
    rdfs:comment "The item ordered." .

schema:organizer a rdf:Property ;
    rdfs:label "organizer" ;
    schema:domainIncludes schema:Event ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    rdfs:comment "An organizer of an Event." .

schema:originAddress a rdf:Property ;
    rdfs:label "originAddress" ;
    schema:domainIncludes schema:ParcelDelivery ;
    schema:rangeIncludes schema:PostalAddress ;
    rdfs:comment "Shipper's address." .

schema:ownedFrom a rdf:Property ;
    rdfs:label "ownedFrom" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:OwnershipInfo ;
    schema:rangeIncludes schema:DateTime ;
    rdfs:comment "The date and time of obtaining the product." .

schema:ownedThrough a rdf:Property ;
    rdfs:label "ownedThrough" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:OwnershipInfo ;
    schema:rangeIncludes schema:DateTime ;
    rdfs:comment "The date and time of giving up ownership on the product." .

schema:owns a rdf:Property ;
    rdfs:label "owns" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Organization,
        schema:Person ;
    schema:rangeIncludes schema:OwnershipInfo,
        schema:Product ;
    rdfs:comment "Products owned by the organization or person." .

schema:pageEnd a rdf:Property ;
    rdfs:label "pageEnd" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex> ;
    schema:domainIncludes schema:Article,
        schema:Chapter,
        schema:PublicationIssue,
        schema:PublicationVolume ;
    schema:rangeIncludes schema:Integer,
        schema:Text ;
    rdfs:comment "The page on which the work ends; for example \"138\" or \"xvi\"." ;
    owl:equivalentProperty bibo:pageEnd .

schema:pageStart a rdf:Property ;
    rdfs:label "pageStart" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex> ;
    schema:domainIncludes schema:Article,
        schema:Chapter,
        schema:PublicationIssue,
        schema:PublicationVolume ;
    schema:rangeIncludes schema:Integer,
        schema:Text ;
    rdfs:comment "The page on which the work starts; for example \"135\" or \"xiii\"." ;
    owl:equivalentProperty bibo:pageStart .

schema:pagination a rdf:Property ;
    rdfs:label "pagination" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex> ;
    schema:domainIncludes schema:Article,
        schema:Chapter,
        schema:PublicationIssue,
        schema:PublicationVolume ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Any description of pages that is not separated into pageStart and pageEnd; for example, \"1-6, 9, 55\" or \"10-12, 46-49\"." ;
    owl:equivalentProperty bibo:pages .

schema:parentItem a rdf:Property ;
    rdfs:label "parentItem" ;
    schema:domainIncludes schema:Comment ;
    schema:rangeIncludes schema:Question ;
    rdfs:comment "The parent of a question, answer or item in general." .

schema:parentService a rdf:Property ;
    rdfs:label "parentService" ;
    schema:domainIncludes schema:BroadcastService ;
    schema:rangeIncludes schema:BroadcastService ;
    rdfs:comment "A broadcast service to which the broadcast service may belong to such as regional variations of a national channel." .

schema:parents a rdf:Property ;
    rdfs:label "parents" ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Person ;
    schema:supersededBy schema:parent ;
    rdfs:comment "A parents of the person." .

schema:partOfEpisode a rdf:Property ;
    rdfs:label "partOfEpisode" ;
    schema:domainIncludes schema:Clip ;
    schema:rangeIncludes schema:Episode ;
    rdfs:comment "The episode to which this clip belongs." ;
    rdfs:subPropertyOf schema:isPartOf .

schema:partOfInvoice a rdf:Property ;
    rdfs:label "partOfInvoice" ;
    schema:domainIncludes schema:Order ;
    schema:rangeIncludes schema:Invoice ;
    rdfs:comment "The order is being paid as part of the referenced Invoice." .

schema:partOfOrder a rdf:Property ;
    rdfs:label "partOfOrder" ;
    schema:domainIncludes schema:ParcelDelivery ;
    schema:rangeIncludes schema:Order ;
    rdfs:comment "The overall order the items in this delivery were included in." .

schema:partOfSeason a rdf:Property ;
    rdfs:label "partOfSeason" ;
    schema:domainIncludes schema:Clip,
        schema:Episode ;
    schema:rangeIncludes schema:CreativeWorkSeason ;
    rdfs:comment "The season to which this episode belongs." ;
    rdfs:subPropertyOf schema:isPartOf .

schema:partOfTVSeries a rdf:Property ;
    rdfs:label "partOfTVSeries" ;
    schema:domainIncludes schema:TVClip,
        schema:TVEpisode,
        schema:TVSeason ;
    schema:rangeIncludes schema:TVSeries ;
    schema:supersededBy schema:partOfSeries ;
    rdfs:comment "The TV series to which this episode or season belongs." ;
    rdfs:subPropertyOf schema:isPartOf .

schema:partySize a rdf:Property ;
    rdfs:label "partySize" ;
    schema:domainIncludes schema:FoodEstablishmentReservation,
        schema:TaxiReservation ;
    schema:rangeIncludes schema:Integer,
        schema:QuantitativeValue ;
    rdfs:comment "Number of people the reservation should accommodate." .

schema:passengerPriorityStatus a rdf:Property ;
    rdfs:label "passengerPriorityStatus" ;
    schema:domainIncludes schema:FlightReservation ;
    schema:rangeIncludes schema:QualitativeValue,
        schema:Text ;
    rdfs:comment "The priority status assigned to a passenger for security or boarding (e.g. FastTrack or Priority)." .

schema:passengerSequenceNumber a rdf:Property ;
    rdfs:label "passengerSequenceNumber" ;
    schema:domainIncludes schema:FlightReservation ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The passenger's sequence number as assigned by the airline." .

schema:paymentAccepted a rdf:Property ;
    rdfs:label "paymentAccepted" ;
    schema:domainIncludes schema:LocalBusiness ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Cash, Credit Card, Cryptocurrency, Local Exchange Tradings System, etc." .

schema:paymentDue a rdf:Property ;
    rdfs:label "paymentDue" ;
    schema:domainIncludes schema:Invoice,
        schema:Order ;
    schema:rangeIncludes schema:DateTime ;
    schema:supersededBy schema:paymentDueDate ;
    rdfs:comment "The date that payment is due." .

schema:paymentMethod a rdf:Property ;
    rdfs:label "paymentMethod" ;
    schema:domainIncludes schema:Invoice,
        schema:Order ;
    schema:rangeIncludes schema:PaymentMethod ;
    rdfs:comment "The name of the credit card or other method of payment for the order." .

schema:paymentMethodId a rdf:Property ;
    rdfs:label "paymentMethodId" ;
    schema:domainIncludes schema:Invoice,
        schema:Order ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "An identifier for the method of payment used (e.g. the last 4 digits of the credit card)." .

schema:paymentStatus a rdf:Property ;
    rdfs:label "paymentStatus" ;
    schema:domainIncludes schema:Invoice ;
    schema:rangeIncludes schema:PaymentStatusType,
        schema:Text ;
    rdfs:comment "The status of payment; whether the invoice has been paid or not." .

schema:paymentUrl a rdf:Property ;
    rdfs:label "paymentUrl" ;
    schema:domainIncludes schema:Order ;
    schema:rangeIncludes schema:URL ;
    rdfs:comment "The URL for sending a payment." .

schema:percentile10 a rdf:Property ;
    rdfs:label "percentile10" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1698> ;
    schema:category "issue-1698" ;
    schema:domainIncludes schema:QuantitativeValueDistribution ;
    schema:rangeIncludes schema:Number ;
    rdfs:comment "The 10th percentile value." .

schema:percentile25 a rdf:Property ;
    rdfs:label "percentile25" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1698> ;
    schema:category "issue-1698" ;
    schema:domainIncludes schema:QuantitativeValueDistribution ;
    schema:rangeIncludes schema:Number ;
    rdfs:comment "The 25th percentile value." .

schema:percentile75 a rdf:Property ;
    rdfs:label "percentile75" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1698> ;
    schema:category "issue-1698" ;
    schema:domainIncludes schema:QuantitativeValueDistribution ;
    schema:rangeIncludes schema:Number ;
    rdfs:comment "The 75th percentile value." .

schema:percentile90 a rdf:Property ;
    rdfs:label "percentile90" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1698> ;
    schema:category "issue-1698" ;
    schema:domainIncludes schema:QuantitativeValueDistribution ;
    schema:rangeIncludes schema:Number ;
    rdfs:comment "The 90th percentile value." .

schema:performerIn a rdf:Property ;
    rdfs:label "performerIn" ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Event ;
    rdfs:comment "Event that this person is a performer or participant in." .

schema:performers a rdf:Property ;
    rdfs:label "performers" ;
    schema:domainIncludes schema:Event ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    schema:supersededBy schema:performer ;
    rdfs:comment "The main performer or performers of the event&#x2014;for example, a presenter, musician, or actor." .

schema:permissionType a rdf:Property ;
    rdfs:label "permissionType" ;
    schema:domainIncludes schema:DigitalDocumentPermission ;
    schema:rangeIncludes schema:DigitalDocumentPermissionType ;
    rdfs:comment "The type of permission granted the person, organization, or audience." .

schema:permissions a rdf:Property ;
    rdfs:label "permissions" ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Permission(s) required to run the app (for example, a mobile app may require full internet access or may run only on wifi)." .

schema:permitAudience a rdf:Property ;
    rdfs:label "permitAudience" ;
    schema:domainIncludes schema:Permit ;
    schema:rangeIncludes schema:Audience ;
    rdfs:comment "The target audience for this permit." .

schema:permittedUsage a rdf:Property ;
    rdfs:label "permittedUsage" ;
    dct:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> ;
    schema:domainIncludes schema:Accommodation ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Indications regarding the permitted usage of the accommodation." .

schema:petsAllowed a rdf:Property ;
    rdfs:label "petsAllowed" ;
    dct:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> ;
    schema:domainIncludes schema:Accommodation,
        schema:LodgingBusiness ;
    schema:rangeIncludes schema:Boolean,
        schema:Text ;
    rdfs:comment "Indicates whether pets are allowed to enter the accommodation or lodging business. More detailed information can be put in a text value." .

schema:photos a rdf:Property ;
    rdfs:label "photos" ;
    schema:domainIncludes schema:Place ;
    schema:rangeIncludes schema:ImageObject,
        schema:Photograph ;
    schema:supersededBy schema:photo ;
    rdfs:comment "Photographs of this place." .

schema:pickupLocation a rdf:Property ;
    rdfs:label "pickupLocation" ;
    schema:domainIncludes schema:RentalCarReservation,
        schema:TaxiReservation ;
    schema:rangeIncludes schema:Place ;
    rdfs:comment "Where a taxi will pick up a passenger or a rental car can be picked up." .

schema:pickupTime a rdf:Property ;
    rdfs:label "pickupTime" ;
    schema:domainIncludes schema:RentalCarReservation,
        schema:TaxiReservation ;
    schema:rangeIncludes schema:DateTime ;
    rdfs:comment "When a taxi will pickup a passenger or a rental car can be picked up." .

schema:playMode a rdf:Property ;
    rdfs:label "playMode" ;
    schema:domainIncludes schema:VideoGame,
        schema:VideoGameSeries ;
    schema:rangeIncludes schema:GamePlayMode ;
    rdfs:comment "Indicates whether this game is multi-player, co-op or single-player.  The game can be marked as multi-player, co-op and single-player at the same time." .

schema:playerType a rdf:Property ;
    rdfs:label "playerType" ;
    schema:domainIncludes schema:MediaObject ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Player type required&#x2014;for example, Flash or Silverlight." .

schema:playersOnline a rdf:Property ;
    rdfs:label "playersOnline" ;
    schema:domainIncludes schema:GameServer ;
    schema:rangeIncludes schema:Integer ;
    rdfs:comment "Number of players on the server." .

schema:polygon a rdf:Property ;
    rdfs:label "polygon" ;
    schema:domainIncludes schema:GeoShape ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "A polygon is the area enclosed by a point-to-point path for which the starting and ending points are the same. A polygon is expressed as a series of four or more space delimited points where the first and final points are identical." .

schema:postOfficeBoxNumber a rdf:Property ;
    rdfs:label "postOfficeBoxNumber" ;
    schema:domainIncludes schema:PostalAddress ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The post office box number for PO box addresses." .

schema:postalCode a rdf:Property ;
    rdfs:label "postalCode" ;
    schema:domainIncludes schema:GeoCoordinates,
        schema:GeoShape,
        schema:PostalAddress ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The postal code. For example, 94043." .

schema:potentialAction a rdf:Property ;
    rdfs:label "potentialAction" ;
    schema:domainIncludes schema:Thing ;
    schema:rangeIncludes schema:Action ;
    rdfs:comment "Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role." .

schema:predecessorOf a rdf:Property ;
    rdfs:label "predecessorOf" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:ProductModel ;
    schema:rangeIncludes schema:ProductModel ;
    rdfs:comment "A pointer from a previous, often discontinued variant of the product to its newer variant." .

schema:prepTime a rdf:Property ;
    rdfs:label "prepTime" ;
    schema:domainIncludes schema:HowTo,
        schema:HowToDirection ;
    schema:rangeIncludes schema:Duration ;
    rdfs:comment "The length of time it takes to prepare the items to be used in instructions or a direction, in <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 duration format</a>." .

schema:previousItem a rdf:Property ;
    rdfs:label "previousItem" ;
    schema:domainIncludes schema:ListItem ;
    schema:rangeIncludes schema:ListItem ;
    rdfs:comment "A link to the ListItem that preceeds the current one." .

schema:previousStartDate a rdf:Property ;
    rdfs:label "previousStartDate" ;
    schema:domainIncludes schema:Event ;
    schema:rangeIncludes schema:Date ;
    rdfs:comment "Used in conjunction with eventStatus for rescheduled or cancelled events. This property contains the previously scheduled start date. For rescheduled events, the startDate property should be used for the newly scheduled start date. In the (rare) case of an event that has been postponed and rescheduled multiple times, this field may be repeated." .

schema:price a rdf:Property ;
    rdfs:label "price" ;
    schema:domainIncludes schema:Offer,
        schema:PriceSpecification,
        schema:TradeAction ;
    schema:rangeIncludes schema:Number,
        schema:Text ;
    rdfs:comment """The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.<br/><br/>

Usage guidelines:<br/><br/>

<ul>
<li>Use the <a class="localLink" href="http://schema.org/priceCurrency">priceCurrency</a> property (with standard formats: <a href="http://en.wikipedia.org/wiki/ISO_4217">ISO 4217 currency format</a> e.g. "USD"; <a href="https://en.wikipedia.org/wiki/List_of_cryptocurrencies">Ticker symbol</a> for cryptocurrencies e.g. "BTC"; well known names for <a href="https://en.wikipedia.org/wiki/Local_exchange_trading_system">Local Exchange Tradings Systems</a> (LETS) and other currency types e.g. "Ithaca HOUR") instead of including <a href="http://en.wikipedia.org/wiki/Dollar_sign#Currencies_that_use_the_dollar_or_peso_sign">ambiguous symbols</a> such as '$' in the value.</li>
<li>Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.</li>
<li>Note that both <a href="http://www.w3.org/TR/xhtml-rdfa-primer/#using-the-content-attribute">RDFa</a> and Microdata syntax allow the use of a "content=" attribute for publishing simple machine-readable values alongside more human-friendly formatting.</li>
<li>Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.</li>
</ul>
""" .

schema:priceComponent a rdf:Property ;
    rdfs:label "priceComponent" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:CompoundPriceSpecification ;
    schema:rangeIncludes schema:UnitPriceSpecification ;
    rdfs:comment "This property links to all <a class=\"localLink\" href=\"http://schema.org/UnitPriceSpecification\">UnitPriceSpecification</a> nodes that apply in parallel for the <a class=\"localLink\" href=\"http://schema.org/CompoundPriceSpecification\">CompoundPriceSpecification</a> node." .

schema:priceCurrency a rdf:Property ;
    rdfs:label "priceCurrency" ;
    schema:domainIncludes schema:Offer,
        schema:PriceSpecification,
        schema:Reservation,
        schema:Ticket,
        schema:TradeAction ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment """The currency of the price, or a price component when attached to <a class="localLink" href="http://schema.org/PriceSpecification">PriceSpecification</a> and its subtypes.<br/><br/>

Use standard formats: <a href="http://en.wikipedia.org/wiki/ISO_4217">ISO 4217 currency format</a> e.g. "USD"; <a href="https://en.wikipedia.org/wiki/List_of_cryptocurrencies">Ticker symbol</a> for cryptocurrencies e.g. "BTC"; well known names for <a href="https://en.wikipedia.org/wiki/Local_exchange_trading_system">Local Exchange Tradings Systems</a> (LETS) and other currency types e.g. "Ithaca HOUR".""" .

schema:priceRange a rdf:Property ;
    rdfs:label "priceRange" ;
    schema:domainIncludes schema:LocalBusiness ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The price range of the business, for example <code>$$$</code>." .

schema:priceSpecification a rdf:Property ;
    rdfs:label "priceSpecification" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Demand,
        schema:Offer,
        schema:TradeAction ;
    schema:rangeIncludes schema:PriceSpecification ;
    rdfs:comment "One or more detailed price specifications, indicating the unit price and delivery or payment charges." .

schema:priceType a rdf:Property ;
    rdfs:label "priceType" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:UnitPriceSpecification ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "A short text or acronym indicating multiple price specifications for the same offer, e.g. SRP for the suggested retail price or INVOICE for the invoice price, mostly used in the car industry." .

schema:priceValidUntil a rdf:Property ;
    rdfs:label "priceValidUntil" ;
    schema:domainIncludes schema:Offer ;
    schema:rangeIncludes schema:Date ;
    rdfs:comment "The date after which the price is no longer available." .

schema:primaryImageOfPage a rdf:Property ;
    rdfs:label "primaryImageOfPage" ;
    schema:domainIncludes schema:WebPage ;
    schema:rangeIncludes schema:ImageObject ;
    rdfs:comment "Indicates the main image on the page." .

schema:printColumn a rdf:Property ;
    rdfs:label "printColumn" ;
    schema:domainIncludes schema:NewsArticle ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The number of the column in which the NewsArticle appears in the print edition." .

schema:printEdition a rdf:Property ;
    rdfs:label "printEdition" ;
    schema:domainIncludes schema:NewsArticle ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The edition of the print product in which the NewsArticle appears." .

schema:printPage a rdf:Property ;
    rdfs:label "printPage" ;
    schema:domainIncludes schema:NewsArticle ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "If this NewsArticle appears in print, this field indicates the name of the page on which the article is found. Please note that this field is intended for the exact page name (e.g. A5, B18)." .

schema:printSection a rdf:Property ;
    rdfs:label "printSection" ;
    schema:domainIncludes schema:NewsArticle ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "If this NewsArticle appears in print, this field indicates the print section in which the article appeared." .

schema:processingTime a rdf:Property ;
    rdfs:label "processingTime" ;
    schema:domainIncludes schema:ServiceChannel ;
    schema:rangeIncludes schema:Duration ;
    rdfs:comment "Estimated processing time for the service using this channel." .

schema:processorRequirements a rdf:Property ;
    rdfs:label "processorRequirements" ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Processor architecture required to run the application (e.g. IA64)." .

schema:producer a rdf:Property ;
    rdfs:label "producer" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    rdfs:comment "The person or organization who produced the work (e.g. music album, movie, tv/radio series etc.)." .

schema:produces a rdf:Property ;
    rdfs:label "produces" ;
    schema:domainIncludes schema:Service ;
    schema:rangeIncludes schema:Thing ;
    schema:supersededBy schema:serviceOutput ;
    rdfs:comment "The tangible thing generated by the service, e.g. a passport, permit, etc." .

schema:productID a rdf:Property ;
    rdfs:label "productID" ;
    schema:domainIncludes schema:Product ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The product identifier, such as ISBN. For example: <code>meta itemprop=\"productID\" content=\"isbn:123-456-789\"</code>." ;
    rdfs:subPropertyOf schema:identifier .

schema:productSupported a rdf:Property ;
    rdfs:label "productSupported" ;
    schema:domainIncludes schema:ContactPoint ;
    schema:rangeIncludes schema:Product,
        schema:Text ;
    rdfs:comment "The product or service this support contact point is related to (such as product support for a particular product line). This can be a specific product or product line (e.g. \"iPhone\") or a general category of products or services (e.g. \"smartphones\")." .

schema:productionCompany a rdf:Property ;
    rdfs:label "productionCompany" ;
    schema:domainIncludes schema:CreativeWorkSeason,
        schema:Episode,
        schema:MediaObject,
        schema:Movie,
        schema:MovieSeries,
        schema:RadioSeries,
        schema:TVSeries,
        schema:VideoGameSeries ;
    schema:rangeIncludes schema:Organization ;
    rdfs:comment "The production company or studio responsible for the item e.g. series, video game, episode etc." .

schema:productionDate a rdf:Property ;
    rdfs:label "productionDate" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> ;
    schema:domainIncludes schema:Product,
        schema:Vehicle ;
    schema:rangeIncludes schema:Date ;
    rdfs:comment "The date of production of the item, e.g. vehicle." .

schema:proficiencyLevel a rdf:Property ;
    rdfs:label "proficiencyLevel" ;
    schema:domainIncludes schema:TechArticle ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Proficiency needed for this content; expected values: 'Beginner', 'Expert'." .

schema:programMembershipUsed a rdf:Property ;
    rdfs:label "programMembershipUsed" ;
    schema:domainIncludes schema:Reservation ;
    schema:rangeIncludes schema:ProgramMembership ;
    rdfs:comment "Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation." .

schema:programName a rdf:Property ;
    rdfs:label "programName" ;
    schema:domainIncludes schema:ProgramMembership ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The program providing the membership." .

schema:programmingLanguage a rdf:Property ;
    rdfs:label "programmingLanguage" ;
    schema:domainIncludes schema:SoftwareSourceCode ;
    schema:rangeIncludes schema:ComputerLanguage,
        schema:Text ;
    rdfs:comment "The computer programming language." .

schema:programmingModel a rdf:Property ;
    rdfs:label "programmingModel" ;
    schema:domainIncludes schema:APIReference ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Indicates whether API is managed or unmanaged." .

schema:propertyID a rdf:Property ;
    rdfs:label "propertyID" ;
    schema:domainIncludes schema:PropertyValue ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    rdfs:comment """A commonly used identifier for the characteristic represented by the property, e.g. a manufacturer or a standard code for a property. propertyID can be
(1) a prefixed string, mainly meant to be used with standards for product properties; (2) a site-specific, non-prefixed string (e.g. the primary key of the property or the vendor-specific id of the property), or (3)
a URL indicating the type of the property, either pointing to an external vocabulary, or a Web resource that describes the property (e.g. a glossary entry).
Standards bodies should promote a standard prefix for the identifiers of properties from their standards.""" .

schema:proteinContent a rdf:Property ;
    rdfs:label "proteinContent" ;
    schema:domainIncludes schema:NutritionInformation ;
    schema:rangeIncludes schema:Mass ;
    rdfs:comment "The number of grams of protein." .

schema:providerMobility a rdf:Property ;
    rdfs:label "providerMobility" ;
    schema:domainIncludes schema:Service ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Indicates the mobility of a provided service (e.g. 'static', 'dynamic')." .

schema:providesService a rdf:Property ;
    rdfs:label "providesService" ;
    schema:domainIncludes schema:ServiceChannel ;
    schema:rangeIncludes schema:Service ;
    rdfs:comment "The service provided by this channel." .

schema:publicAccess a rdf:Property ;
    rdfs:label "publicAccess" ;
    schema:domainIncludes schema:Place ;
    schema:rangeIncludes schema:Boolean ;
    rdfs:comment "A flag to signal that the <a class=\"localLink\" href=\"http://schema.org/Place\">Place</a> is open to public visitors.  If this property is omitted there is no assumed default boolean value" .

schema:publication a rdf:Property ;
    rdfs:label "publication" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:PublicationEvent ;
    rdfs:comment "A publication event associated with the item." .

schema:publishedOn a rdf:Property ;
    rdfs:label "publishedOn" ;
    schema:domainIncludes schema:PublicationEvent ;
    schema:rangeIncludes schema:BroadcastService ;
    rdfs:comment "A broadcast service associated with the publication event." .

schema:publisher a rdf:Property ;
    rdfs:label "publisher" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    rdfs:comment "The publisher of the creative work." .

schema:publishingPrinciples a rdf:Property ;
    rdfs:label "publishingPrinciples" ;
    schema:domainIncludes schema:CreativeWork,
        schema:Organization,
        schema:Person ;
    schema:rangeIncludes schema:CreativeWork,
        schema:URL ;
    rdfs:comment """The publishingPrinciples property indicates (typically via <a class="localLink" href="http://schema.org/URL">URL</a>) a document describing the editorial principles of an <a class="localLink" href="http://schema.org/Organization">Organization</a> (or individual e.g. a <a class="localLink" href="http://schema.org/Person">Person</a> writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a <a class="localLink" href="http://schema.org/CreativeWork">CreativeWork</a> (e.g. <a class="localLink" href="http://schema.org/NewsArticle">NewsArticle</a>) the principles are those of the party primarily responsible for the creation of the <a class="localLink" href="http://schema.org/CreativeWork">CreativeWork</a>.<br/><br/>

While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a <a class="localLink" href="http://schema.org/funder">funder</a>) can be expressed using schema.org terminology.""" .

schema:purchaseDate a rdf:Property ;
    rdfs:label "purchaseDate" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> ;
    schema:domainIncludes schema:Product,
        schema:Vehicle ;
    schema:rangeIncludes schema:Date ;
    rdfs:comment "The date the item e.g. vehicle was purchased by the current owner." .

schema:query a rdf:Property ;
    rdfs:label "query" ;
    schema:domainIncludes schema:SearchAction ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "A sub property of instrument. The query used on this action." ;
    rdfs:subPropertyOf schema:instrument .

schema:quest a rdf:Property ;
    rdfs:label "quest" ;
    schema:domainIncludes schema:Game,
        schema:VideoGameSeries ;
    schema:rangeIncludes schema:Thing ;
    rdfs:comment "The task that a player-controlled character, or group of characters may complete in order to gain a reward." .

schema:question a rdf:Property ;
    rdfs:label "question" ;
    schema:domainIncludes schema:AskAction ;
    schema:rangeIncludes schema:Question ;
    rdfs:comment "A sub property of object. A question." ;
    rdfs:subPropertyOf schema:object .

schema:ratingCount a rdf:Property ;
    rdfs:label "ratingCount" ;
    schema:domainIncludes schema:AggregateRating ;
    schema:rangeIncludes schema:Integer ;
    rdfs:comment "The count of total number of ratings." .

schema:ratingValue a rdf:Property ;
    rdfs:label "ratingValue" ;
    schema:domainIncludes schema:Rating ;
    schema:rangeIncludes schema:Number,
        schema:Text ;
    rdfs:comment """The rating for the content.<br/><br/>

Usage guidelines:<br/><br/>

<ul>
<li>Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.</li>
<li>Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.</li>
</ul>
""" .

schema:readonlyValue a rdf:Property ;
    rdfs:label "readonlyValue" ;
    schema:domainIncludes schema:PropertyValueSpecification ;
    schema:rangeIncludes schema:Boolean ;
    rdfs:comment "Whether or not a property is mutable.  Default is false. Specifying this for a property that also has a value makes it act similar to a \"hidden\" input in an HTML form." .

schema:realEstateAgent a rdf:Property ;
    rdfs:label "realEstateAgent" ;
    schema:domainIncludes schema:RentAction ;
    schema:rangeIncludes schema:RealEstateAgent ;
    rdfs:comment "A sub property of participant. The real estate agent involved in the action." ;
    rdfs:subPropertyOf schema:participant .

schema:recipe a rdf:Property ;
    rdfs:label "recipe" ;
    schema:domainIncludes schema:CookAction ;
    schema:rangeIncludes schema:Recipe ;
    rdfs:comment "A sub property of instrument. The recipe/instructions used to perform the action." ;
    rdfs:subPropertyOf schema:instrument .

schema:recipeCategory a rdf:Property ;
    rdfs:label "recipeCategory" ;
    schema:domainIncludes schema:Recipe ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The category of the recipe—for example, appetizer, entree, etc." .

schema:recipeCuisine a rdf:Property ;
    rdfs:label "recipeCuisine" ;
    schema:domainIncludes schema:Recipe ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The cuisine of the recipe (for example, French or Ethiopian)." .

schema:recipeInstructions a rdf:Property ;
    rdfs:label "recipeInstructions" ;
    schema:domainIncludes schema:Recipe ;
    schema:rangeIncludes schema:CreativeWork,
        schema:ItemList,
        schema:Text ;
    rdfs:comment "A step in making the recipe, in the form of a single item (document, video, etc.) or an ordered list with HowToStep and/or HowToSection items." ;
    rdfs:subPropertyOf schema:step .

schema:recipeYield a rdf:Property ;
    rdfs:label "recipeYield" ;
    schema:domainIncludes schema:Recipe ;
    schema:rangeIncludes schema:QuantitativeValue,
        schema:Text ;
    rdfs:comment "The quantity produced by the recipe (for example, number of people served, number of servings, etc)." ;
    rdfs:subPropertyOf schema:yield .

schema:recordLabel a rdf:Property ;
    rdfs:label "recordLabel" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    schema:domainIncludes schema:MusicRelease ;
    schema:rangeIncludes schema:Organization ;
    rdfs:comment "The label that issued the release." ;
    owl:equivalentProperty <http://purl.org/ontology/mo/label> .

schema:referenceQuantity a rdf:Property ;
    rdfs:label "referenceQuantity" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsProperties>,
        <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:UnitPriceSpecification ;
    schema:rangeIncludes schema:QuantitativeValue ;
    rdfs:comment "The reference quantity for which a certain price applies, e.g. 1 EUR per 4 kWh of electricity. This property is a replacement for unitOfMeasurement for the advanced cases where the price does not relate to a standard unit." .

schema:referencesOrder a rdf:Property ;
    rdfs:label "referencesOrder" ;
    schema:domainIncludes schema:Invoice ;
    schema:rangeIncludes schema:Order ;
    rdfs:comment "The Order(s) related to this Invoice. One or more Orders may be combined into a single Invoice." .

schema:regionsAllowed a rdf:Property ;
    rdfs:label "regionsAllowed" ;
    schema:domainIncludes schema:MediaObject ;
    schema:rangeIncludes schema:Place ;
    rdfs:comment "The regions where the media is allowed. If not specified, then it's assumed to be allowed everywhere. Specify the countries in <a href=\"http://en.wikipedia.org/wiki/ISO_3166\">ISO 3166 format</a>." .

schema:relatedLink a rdf:Property ;
    rdfs:label "relatedLink" ;
    schema:domainIncludes schema:WebPage ;
    schema:rangeIncludes schema:URL ;
    rdfs:comment "A link related to this web page, for example to other related web pages." .

schema:relatedTo a rdf:Property ;
    rdfs:label "relatedTo" ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Person ;
    rdfs:comment "The most generic familial relation." .

schema:releaseDate a rdf:Property ;
    rdfs:label "releaseDate" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Product ;
    schema:rangeIncludes schema:Date ;
    rdfs:comment "The release date of a product or product model. This can be used to distinguish the exact variant of a product." .

schema:releaseNotes a rdf:Property ;
    rdfs:label "releaseNotes" ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    rdfs:comment "Description of what changed in this version." .

schema:releasedEvent a rdf:Property ;
    rdfs:label "releasedEvent" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:PublicationEvent ;
    rdfs:comment "The place and time the release was issued, expressed as a PublicationEvent." .

schema:relevantOccupation a rdf:Property ;
    rdfs:label "relevantOccupation" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1698> ;
    schema:category "issue-1698" ;
    schema:domainIncludes schema:JobPosting ;
    schema:rangeIncludes schema:Occupation ;
    rdfs:comment "The Occupation for the JobPosting." .

schema:remainingAttendeeCapacity a rdf:Property ;
    rdfs:label "remainingAttendeeCapacity" ;
    schema:domainIncludes schema:Event ;
    schema:rangeIncludes schema:Integer ;
    rdfs:comment "The number of attendee places for an event that remain unallocated." .

schema:replacee a rdf:Property ;
    rdfs:label "replacee" ;
    schema:domainIncludes schema:ReplaceAction ;
    schema:rangeIncludes schema:Thing ;
    rdfs:comment "A sub property of object. The object that is being replaced." ;
    rdfs:subPropertyOf schema:object .

schema:replacer a rdf:Property ;
    rdfs:label "replacer" ;
    schema:domainIncludes schema:ReplaceAction ;
    schema:rangeIncludes schema:Thing ;
    rdfs:comment "A sub property of object. The object that replaces." ;
    rdfs:subPropertyOf schema:object .

schema:replyToUrl a rdf:Property ;
    rdfs:label "replyToUrl" ;
    schema:domainIncludes schema:UserComments ;
    schema:rangeIncludes schema:URL ;
    rdfs:comment "The URL at which a reply may be posted to the specified UserComment." .

schema:reportNumber a rdf:Property ;
    rdfs:label "reportNumber" ;
    schema:domainIncludes schema:Report ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The number or other unique designator assigned to a Report by the publishing organization." .

schema:representativeOfPage a rdf:Property ;
    rdfs:label "representativeOfPage" ;
    schema:domainIncludes schema:ImageObject ;
    schema:rangeIncludes schema:Boolean ;
    rdfs:comment "Indicates whether this image is representative of the content of the page." .

schema:requiredCollateral a rdf:Property ;
    rdfs:label "requiredCollateral" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO> ;
    schema:domainIncludes schema:LoanOrCredit ;
    schema:rangeIncludes schema:Text,
        schema:Thing ;
    rdfs:comment "Assets required to secure loan or credit repayments. It may take form of third party pledge, goods, financial instruments (cash, securities, etc.)" .

schema:requiredGender a rdf:Property ;
    rdfs:label "requiredGender" ;
    schema:domainIncludes schema:PeopleAudience ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Audiences defined by a person's gender." .

schema:requiredMaxAge a rdf:Property ;
    rdfs:label "requiredMaxAge" ;
    schema:domainIncludes schema:PeopleAudience ;
    schema:rangeIncludes schema:Integer ;
    rdfs:comment "Audiences defined by a person's maximum age." .

schema:requiredMinAge a rdf:Property ;
    rdfs:label "requiredMinAge" ;
    schema:domainIncludes schema:PeopleAudience ;
    schema:rangeIncludes schema:Integer ;
    rdfs:comment "Audiences defined by a person's minimum age." .

schema:requiredQuantity a rdf:Property ;
    rdfs:label "requiredQuantity" ;
    schema:domainIncludes schema:HowToItem ;
    schema:rangeIncludes schema:Number,
        schema:QuantitativeValue,
        schema:Text ;
    rdfs:comment "The required quantity of the item(s)." .

schema:requirements a rdf:Property ;
    rdfs:label "requirements" ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    schema:supersededBy schema:softwareRequirements ;
    rdfs:comment "Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (Examples: DirectX, Java or .NET runtime)." .

schema:requiresSubscription a rdf:Property ;
    rdfs:label "requiresSubscription" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1741> ;
    schema:category "issue-1741" ;
    schema:domainIncludes schema:ActionAccessSpecification,
        schema:MediaObject ;
    schema:rangeIncludes schema:Boolean,
        schema:MediaSubscription ;
    rdfs:comment "Indicates if use of the media require a subscription  (either paid or free). Allowed values are <code>true</code> or <code>false</code> (note that an earlier version had 'yes', 'no')." .

schema:reservationFor a rdf:Property ;
    rdfs:label "reservationFor" ;
    schema:domainIncludes schema:Reservation ;
    schema:rangeIncludes schema:Thing ;
    rdfs:comment "The thing -- flight, event, restaurant,etc. being reserved." .

schema:reservationId a rdf:Property ;
    rdfs:label "reservationId" ;
    schema:domainIncludes schema:Reservation ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "A unique identifier for the reservation." .

schema:reservationStatus a rdf:Property ;
    rdfs:label "reservationStatus" ;
    schema:domainIncludes schema:Reservation ;
    schema:rangeIncludes schema:ReservationStatusType ;
    rdfs:comment "The current status of the reservation." .

schema:reservedTicket a rdf:Property ;
    rdfs:label "reservedTicket" ;
    schema:domainIncludes schema:Reservation ;
    schema:rangeIncludes schema:Ticket ;
    rdfs:comment "A ticket associated with the reservation." .

schema:responsibilities a rdf:Property ;
    rdfs:label "responsibilities" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1698> ;
    schema:category "issue-1698" ;
    schema:domainIncludes schema:JobPosting,
        schema:Occupation ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Responsibilities associated with this role or Occupation." .

schema:resultComment a rdf:Property ;
    rdfs:label "resultComment" ;
    schema:domainIncludes schema:CommentAction,
        schema:ReplyAction ;
    schema:rangeIncludes schema:Comment ;
    rdfs:comment "A sub property of result. The Comment created or sent as a result of this action." ;
    rdfs:subPropertyOf schema:result .

schema:resultReview a rdf:Property ;
    rdfs:label "resultReview" ;
    schema:domainIncludes schema:ReviewAction ;
    schema:rangeIncludes schema:Review ;
    rdfs:comment "A sub property of result. The review that resulted in the performing of the action." ;
    rdfs:subPropertyOf schema:result .

schema:reviewAspect a rdf:Property ;
    rdfs:label "reviewAspect" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1689> ;
    schema:category "issue-1689" ;
    schema:domainIncludes schema:Rating,
        schema:Review ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "This Review or Rating is relevant to this part or facet of the itemReviewed." .

schema:reviewBody a rdf:Property ;
    rdfs:label "reviewBody" ;
    schema:domainIncludes schema:Review ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The actual body of the review." .

schema:reviewCount a rdf:Property ;
    rdfs:label "reviewCount" ;
    schema:domainIncludes schema:AggregateRating ;
    schema:rangeIncludes schema:Integer ;
    rdfs:comment "The count of total number of reviews." .

schema:reviewRating a rdf:Property ;
    rdfs:label "reviewRating" ;
    schema:domainIncludes schema:Review ;
    schema:rangeIncludes schema:Rating ;
    rdfs:comment "The rating given in this review. Note that reviews can themselves be rated. The <code>reviewRating</code> applies to rating given by the review. The <a class=\"localLink\" href=\"http://schema.org/aggregateRating\">aggregateRating</a> property applies to the review itself, as a creative work." .

schema:reviewedBy a rdf:Property ;
    rdfs:label "reviewedBy" ;
    schema:domainIncludes schema:WebPage ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    rdfs:comment "People or organizations that have reviewed the content on this web page for accuracy and/or completeness." .

schema:reviews a rdf:Property ;
    rdfs:label "reviews" ;
    schema:domainIncludes schema:CreativeWork,
        schema:Offer,
        schema:Organization,
        schema:Place,
        schema:Product ;
    schema:rangeIncludes schema:Review ;
    schema:supersededBy schema:review ;
    rdfs:comment "Review of the item." .

schema:rsvpResponse a rdf:Property ;
    rdfs:label "rsvpResponse" ;
    schema:domainIncludes schema:RsvpAction ;
    schema:rangeIncludes schema:RsvpResponseType ;
    rdfs:comment "The response (yes, no, maybe) to the RSVP." .

schema:runtime a rdf:Property ;
    rdfs:label "runtime" ;
    schema:domainIncludes schema:SoftwareSourceCode ;
    schema:rangeIncludes schema:Text ;
    schema:supersededBy schema:runtimePlatform ;
    rdfs:comment "Runtime platform or script interpreter dependencies (Example - Java v1, Python2.3, .Net Framework 3.0)." .

schema:salaryCurrency a rdf:Property ;
    rdfs:label "salaryCurrency" ;
    schema:domainIncludes schema:EmployeeRole,
        schema:JobPosting ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The currency (coded using <a href=\"http://en.wikipedia.org/wiki/ISO_4217\">ISO 4217</a> ) used for the main salary information in this job posting or for this employee." .

schema:sameAs a rdf:Property ;
    rdfs:label "sameAs" ;
    schema:domainIncludes schema:Thing ;
    schema:rangeIncludes schema:URL ;
    rdfs:comment "URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website." .

schema:sampleType a rdf:Property ;
    rdfs:label "sampleType" ;
    schema:domainIncludes schema:SoftwareSourceCode ;
    schema:rangeIncludes schema:Text ;
    schema:supersededBy schema:codeSampleType ;
    rdfs:comment "What type of code sample: full (compile ready) solution, code snippet, inline code, scripts, template." .

schema:saturatedFatContent a rdf:Property ;
    rdfs:label "saturatedFatContent" ;
    schema:domainIncludes schema:NutritionInformation ;
    schema:rangeIncludes schema:Mass ;
    rdfs:comment "The number of grams of saturated fat." .

schema:scheduledPaymentDate a rdf:Property ;
    rdfs:label "scheduledPaymentDate" ;
    schema:domainIncludes schema:Invoice ;
    schema:rangeIncludes schema:Date ;
    rdfs:comment "The date the invoice is scheduled to be paid." .

schema:scheduledTime a rdf:Property ;
    rdfs:label "scheduledTime" ;
    schema:domainIncludes schema:PlanAction ;
    schema:rangeIncludes schema:DateTime ;
    rdfs:comment "The time the object is scheduled to." .

schema:schemaVersion a rdf:Property ;
    rdfs:label "schemaVersion" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    rdfs:comment "Indicates (by URL or string) a particular version of a schema used in some CreativeWork. For example, a document could declare a schemaVersion using an URL such as http://schema.org/version/2.0/ if precise indication of schema version was required by some application." .

schema:screenCount a rdf:Property ;
    rdfs:label "screenCount" ;
    schema:domainIncludes schema:MovieTheater ;
    schema:rangeIncludes schema:Number ;
    rdfs:comment "The number of screens in the movie theater." .

schema:screenshot a rdf:Property ;
    rdfs:label "screenshot" ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:ImageObject,
        schema:URL ;
    rdfs:comment "A link to a screenshot image of the app." .

schema:seasonNumber a rdf:Property ;
    rdfs:label "seasonNumber" ;
    schema:domainIncludes schema:CreativeWorkSeason ;
    schema:rangeIncludes schema:Integer,
        schema:Text ;
    rdfs:comment "Position of the season within an ordered group of seasons." ;
    rdfs:subPropertyOf schema:position .

schema:seasons a rdf:Property ;
    rdfs:label "seasons" ;
    schema:domainIncludes schema:RadioSeries,
        schema:TVSeries,
        schema:VideoGameSeries ;
    schema:rangeIncludes schema:CreativeWorkSeason ;
    schema:supersededBy schema:season ;
    rdfs:comment "A season in a media series." .

schema:seatNumber a rdf:Property ;
    rdfs:label "seatNumber" ;
    schema:domainIncludes schema:Seat ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The location of the reserved seat (e.g., 27)." .

schema:seatRow a rdf:Property ;
    rdfs:label "seatRow" ;
    schema:domainIncludes schema:Seat ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The row location of the reserved seat (e.g., B)." .

schema:seatSection a rdf:Property ;
    rdfs:label "seatSection" ;
    schema:domainIncludes schema:Seat ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The section location of the reserved seat (e.g. Orchestra)." .

schema:seatingType a rdf:Property ;
    rdfs:label "seatingType" ;
    schema:domainIncludes schema:Seat ;
    schema:rangeIncludes schema:QualitativeValue,
        schema:Text ;
    rdfs:comment "The type/class of the seat." .

schema:securityScreening a rdf:Property ;
    rdfs:label "securityScreening" ;
    schema:domainIncludes schema:FlightReservation ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The type of security screening the passenger is subject to." .

schema:seeks a rdf:Property ;
    rdfs:label "seeks" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Organization,
        schema:Person ;
    schema:rangeIncludes schema:Demand ;
    rdfs:comment "A pointer to products or services sought by the organization or person (demand)." .

schema:sender a rdf:Property ;
    rdfs:label "sender" ;
    schema:domainIncludes schema:Message,
        schema:ReceiveAction ;
    schema:rangeIncludes schema:Audience,
        schema:Organization,
        schema:Person ;
    rdfs:comment "A sub property of participant. The participant who is at the sending end of the action." ;
    rdfs:subPropertyOf schema:participant .

schema:serverStatus a rdf:Property ;
    rdfs:label "serverStatus" ;
    schema:domainIncludes schema:GameServer ;
    schema:rangeIncludes schema:GameServerStatus ;
    rdfs:comment "Status of a game server." .

schema:servesCuisine a rdf:Property ;
    rdfs:label "servesCuisine" ;
    schema:domainIncludes schema:FoodEstablishment ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The cuisine of the restaurant." .

schema:serviceAudience a rdf:Property ;
    rdfs:label "serviceAudience" ;
    schema:domainIncludes schema:Service ;
    schema:rangeIncludes schema:Audience ;
    schema:supersededBy schema:audience ;
    rdfs:comment "The audience eligible for this service." .

schema:serviceLocation a rdf:Property ;
    rdfs:label "serviceLocation" ;
    schema:domainIncludes schema:ServiceChannel ;
    schema:rangeIncludes schema:Place ;
    rdfs:comment "The location (e.g. civic structure, local business, etc.) where a person can go to access the service." .

schema:serviceOperator a rdf:Property ;
    rdfs:label "serviceOperator" ;
    schema:domainIncludes schema:GovernmentService ;
    schema:rangeIncludes schema:Organization ;
    rdfs:comment "The operating organization, if different from the provider.  This enables the representation of services that are provided by an organization, but operated by another organization like a subcontractor." .

schema:servicePhone a rdf:Property ;
    rdfs:label "servicePhone" ;
    schema:domainIncludes schema:ServiceChannel ;
    schema:rangeIncludes schema:ContactPoint ;
    rdfs:comment "The phone number to use to access the service." .

schema:servicePostalAddress a rdf:Property ;
    rdfs:label "servicePostalAddress" ;
    schema:domainIncludes schema:ServiceChannel ;
    schema:rangeIncludes schema:PostalAddress ;
    rdfs:comment "The address for accessing the service by mail." .

schema:serviceSmsNumber a rdf:Property ;
    rdfs:label "serviceSmsNumber" ;
    schema:domainIncludes schema:ServiceChannel ;
    schema:rangeIncludes schema:ContactPoint ;
    rdfs:comment "The number to access the service by text message." .

schema:serviceType a rdf:Property ;
    rdfs:label "serviceType" ;
    schema:domainIncludes schema:Service ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The type of service being offered, e.g. veterans' benefits, emergency relief, etc." .

schema:serviceUrl a rdf:Property ;
    rdfs:label "serviceUrl" ;
    schema:domainIncludes schema:ServiceChannel ;
    schema:rangeIncludes schema:URL ;
    rdfs:comment "The website to access the service." .

schema:servingSize a rdf:Property ;
    rdfs:label "servingSize" ;
    schema:domainIncludes schema:NutritionInformation ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The serving size, in terms of the number of volume or mass." .

schema:sharedContent a rdf:Property ;
    rdfs:label "sharedContent" ;
    schema:domainIncludes schema:SocialMediaPosting ;
    schema:rangeIncludes schema:CreativeWork ;
    rdfs:comment "A CreativeWork such as an image, video, or audio clip shared as part of this posting." .

schema:siblings a rdf:Property ;
    rdfs:label "siblings" ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Person ;
    schema:supersededBy schema:sibling ;
    rdfs:comment "A sibling of the person." .

schema:significantLinks a rdf:Property ;
    rdfs:label "significantLinks" ;
    schema:domainIncludes schema:WebPage ;
    schema:rangeIncludes schema:URL ;
    schema:supersededBy schema:significantLink ;
    rdfs:comment "The most significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most." .

schema:skills a rdf:Property ;
    rdfs:label "skills" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1698> ;
    schema:category "issue-1698" ;
    schema:domainIncludes schema:JobPosting,
        schema:Occupation ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Skills required to fulfill this role or in this Occupation." .

schema:sku a rdf:Property ;
    rdfs:label "sku" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Demand,
        schema:Offer,
        schema:Product ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers." ;
    rdfs:subPropertyOf schema:identifier .

schema:slogan a rdf:Property ;
    rdfs:label "slogan" ;
    schema:domainIncludes schema:Brand,
        schema:Organization,
        schema:Place,
        schema:Product,
        schema:Service ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "A slogan or motto associated with the item." .

schema:smokingAllowed a rdf:Property ;
    rdfs:label "smokingAllowed" ;
    dct:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> ;
    schema:domainIncludes schema:Place ;
    schema:rangeIncludes schema:Boolean ;
    rdfs:comment "Indicates whether it is allowed to smoke in the place, e.g. in the restaurant, hotel or hotel room." .

schema:sodiumContent a rdf:Property ;
    rdfs:label "sodiumContent" ;
    schema:domainIncludes schema:NutritionInformation ;
    schema:rangeIncludes schema:Mass ;
    rdfs:comment "The number of milligrams of sodium." .

schema:softwareAddOn a rdf:Property ;
    rdfs:label "softwareAddOn" ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:SoftwareApplication ;
    rdfs:comment "Additional content for a software application." .

schema:softwareHelp a rdf:Property ;
    rdfs:label "softwareHelp" ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:CreativeWork ;
    rdfs:comment "Software application help." .

schema:softwareVersion a rdf:Property ;
    rdfs:label "softwareVersion" ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Version of the software instance." .

schema:sourceOrganization a rdf:Property ;
    rdfs:label "sourceOrganization" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Organization ;
    rdfs:comment "The Organization on whose behalf the creator was working." .

schema:spatial a rdf:Property ;
    rdfs:label "spatial" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Place ;
    rdfs:comment """The "spatial" property can be used in cases when more specific properties
(e.g. <a class="localLink" href="http://schema.org/locationCreated">locationCreated</a>, <a class="localLink" href="http://schema.org/spatialCoverage">spatialCoverage</a>, <a class="localLink" href="http://schema.org/contentLocation">contentLocation</a>) are not known to be appropriate.""" ;
    owl:equivalentProperty dct:spatial .

schema:spatialCoverage a rdf:Property ;
    rdfs:label "spatialCoverage" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Place ;
    rdfs:comment """The spatialCoverage of a CreativeWork indicates the place(s) which are the focus of the content. It is a subproperty of
      contentLocation intended primarily for more technical and detailed materials. For example with a Dataset, it indicates
      areas that the dataset describes: a dataset of New York weather would have spatialCoverage which was the place: the state of New York.""" ;
    rdfs:subPropertyOf schema:contentLocation ;
    owl:equivalentProperty dct:spatial .

schema:speakable a rdf:Property ;
    rdfs:label "speakable" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1389> ;
    schema:category "issue-1389" ;
    schema:domainIncludes schema:Article,
        schema:WebPage ;
    schema:rangeIncludes schema:SpeakableSpecification,
        schema:URL ;
    rdfs:comment """Indicates sections of a Web page that are particularly 'speakable' in the sense of being highlighted as being especially appropriate for text-to-speech conversion. Other sections of a page may also be usefully spoken in particular circumstances; the 'speakable' property serves to indicate the parts most likely to be generally useful for speech.<br/><br/>

The <em>speakable</em> property can be repeated an arbitrary number of times, with three kinds of possible 'content-locator' values:<br/><br/>

1.) <em>id-value</em> URL references - uses <em>id-value</em> of an element in the page being annotated. The simplest use of <em>speakable</em> has (potentially relative) URL values, referencing identified sections of the document concerned.<br/><br/>

2.) CSS Selectors - addresses content in the annotated page, eg. via class attribute. Use the <a class="localLink" href="http://schema.org/cssSelector">cssSelector</a> property.<br/><br/>

3.)  XPaths - addresses content via XPaths (assuming an XML view of the content). Use the <a class="localLink" href="http://schema.org/xpath">xpath</a> property.<br/><br/>

For more sophisticated markup of speakable sections beyond simple ID references, either CSS selectors or XPath expressions to pick out document section(s) as speakable. For this
we define a supporting type, <a class="localLink" href="http://schema.org/SpeakableSpecification">SpeakableSpecification</a>  which is defined to be a possible value of the <em>speakable</em> property.""" .

schema:specialCommitments a rdf:Property ;
    rdfs:label "specialCommitments" ;
    schema:domainIncludes schema:JobPosting ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Any special commitments associated with this job posting. Valid entries include VeteranCommit, MilitarySpouseCommit, etc." .

schema:specialOpeningHoursSpecification a rdf:Property ;
    rdfs:label "specialOpeningHoursSpecification" ;
    schema:domainIncludes schema:Place ;
    schema:rangeIncludes schema:OpeningHoursSpecification ;
    rdfs:comment """The special opening hours of a certain place.<br/><br/>

Use this to explicitly override general opening hours brought in scope by <a class="localLink" href="http://schema.org/openingHoursSpecification">openingHoursSpecification</a> or <a class="localLink" href="http://schema.org/openingHours">openingHours</a>.""" .

schema:specialty a rdf:Property ;
    rdfs:label "specialty" ;
    schema:domainIncludes schema:WebPage ;
    schema:rangeIncludes schema:Specialty ;
    rdfs:comment "One of the domain specialities to which this web page's content applies." .

schema:sport a rdf:Property ;
    rdfs:label "sport" ;
    schema:domainIncludes schema:SportsOrganization ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    rdfs:comment "A type of sport (e.g. Baseball)." .

schema:sportsActivityLocation a rdf:Property ;
    rdfs:label "sportsActivityLocation" ;
    schema:domainIncludes schema:ExerciseAction ;
    schema:rangeIncludes schema:SportsActivityLocation ;
    rdfs:comment "A sub property of location. The sports activity location where this action occurred." ;
    rdfs:subPropertyOf schema:location .

schema:sportsEvent a rdf:Property ;
    rdfs:label "sportsEvent" ;
    schema:domainIncludes schema:ExerciseAction ;
    schema:rangeIncludes schema:SportsEvent ;
    rdfs:comment "A sub property of location. The sports event where this action occurred." ;
    rdfs:subPropertyOf schema:location .

schema:sportsTeam a rdf:Property ;
    rdfs:label "sportsTeam" ;
    schema:domainIncludes schema:ExerciseAction ;
    schema:rangeIncludes schema:SportsTeam ;
    rdfs:comment "A sub property of participant. The sports team that participated on this action." ;
    rdfs:subPropertyOf schema:participant .

schema:spouse a rdf:Property ;
    rdfs:label "spouse" ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Person ;
    rdfs:comment "The person's spouse." .

schema:starRating a rdf:Property ;
    rdfs:label "starRating" ;
    dct:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> ;
    schema:domainIncludes schema:FoodEstablishment,
        schema:LodgingBusiness ;
    schema:rangeIncludes schema:Rating ;
    rdfs:comment "An official rating for a lodging business or food establishment, e.g. from national associations or standards bodies. Use the author property to indicate the rating organization, e.g. as an Organization with name such as (e.g. HOTREC, DEHOGA, WHR, or Hotelstars)." .

schema:startDate a rdf:Property ;
    rdfs:label "startDate" ;
    schema:domainIncludes schema:CreativeWorkSeason,
        schema:CreativeWorkSeries,
        schema:DatedMoneySpecification,
        schema:Event,
        schema:Role ;
    schema:rangeIncludes schema:Date,
        schema:DateTime ;
    rdfs:comment "The start date and time of the item (in <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 date format</a>)." .

schema:startTime a rdf:Property ;
    rdfs:label "startTime" ;
    schema:domainIncludes schema:Action,
        schema:FoodEstablishmentReservation,
        schema:MediaObject ;
    schema:rangeIncludes schema:DateTime ;
    rdfs:comment """The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from <em>January</em> to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.<br/><br/>

Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.""" .

schema:steeringPosition a rdf:Property ;
    rdfs:label "steeringPosition" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:SteeringPositionValue ;
    rdfs:comment "The position of the steering wheel or similar device (mostly for cars)." .

schema:stepValue a rdf:Property ;
    rdfs:label "stepValue" ;
    schema:domainIncludes schema:PropertyValueSpecification ;
    schema:rangeIncludes schema:Number ;
    rdfs:comment "The stepValue attribute indicates the granularity that is expected (and required) of the value in a PropertyValueSpecification." .

schema:steps a rdf:Property ;
    rdfs:label "steps" ;
    schema:domainIncludes schema:HowTo,
        schema:HowToSection ;
    schema:rangeIncludes schema:CreativeWork,
        schema:ItemList,
        schema:Text ;
    schema:supersededBy schema:step ;
    rdfs:comment "A single step item (as HowToStep, text, document, video, etc.) or a HowToSection (originally misnamed 'steps'; 'step' is preferred)." .

schema:storageRequirements a rdf:Property ;
    rdfs:label "storageRequirements" ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    rdfs:comment "Storage requirements (free space required)." .

schema:streetAddress a rdf:Property ;
    rdfs:label "streetAddress" ;
    schema:domainIncludes schema:PostalAddress ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The street address. For example, 1600 Amphitheatre Pkwy." .

schema:subEvents a rdf:Property ;
    rdfs:label "subEvents" ;
    schema:domainIncludes schema:Event ;
    schema:rangeIncludes schema:Event ;
    schema:supersededBy schema:subEvent ;
    rdfs:comment "Events that are a part of this event. For example, a conference event includes many presentations, each subEvents of the conference." .

schema:subReservation a rdf:Property ;
    rdfs:label "subReservation" ;
    schema:domainIncludes schema:ReservationPackage ;
    schema:rangeIncludes schema:Reservation ;
    rdfs:comment "The individual reservations included in the package. Typically a repeated property." .

schema:subtitleLanguage a rdf:Property ;
    rdfs:label "subtitleLanguage" ;
    schema:domainIncludes schema:Movie,
        schema:ScreeningEvent,
        schema:TVEpisode ;
    schema:rangeIncludes schema:Language,
        schema:Text ;
    rdfs:comment "Languages in which subtitles/captions are available, in <a href=\"http://tools.ietf.org/html/bcp47\">IETF BCP 47 standard format</a>." .

schema:successorOf a rdf:Property ;
    rdfs:label "successorOf" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:ProductModel ;
    schema:rangeIncludes schema:ProductModel ;
    rdfs:comment "A pointer from a newer variant of a product  to its previous, often discontinued predecessor." .

schema:sugarContent a rdf:Property ;
    rdfs:label "sugarContent" ;
    schema:domainIncludes schema:NutritionInformation ;
    schema:rangeIncludes schema:Mass ;
    rdfs:comment "The number of grams of sugar." .

schema:suggestedGender a rdf:Property ;
    rdfs:label "suggestedGender" ;
    schema:domainIncludes schema:PeopleAudience ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The gender of the person or audience." .

schema:suggestedMaxAge a rdf:Property ;
    rdfs:label "suggestedMaxAge" ;
    schema:domainIncludes schema:PeopleAudience ;
    schema:rangeIncludes schema:Number ;
    rdfs:comment "Maximal age recommended for viewing content." .

schema:suggestedMinAge a rdf:Property ;
    rdfs:label "suggestedMinAge" ;
    schema:domainIncludes schema:PeopleAudience ;
    schema:rangeIncludes schema:Number ;
    rdfs:comment "Minimal age recommended for viewing content." .

schema:suitableForDiet a rdf:Property ;
    rdfs:label "suitableForDiet" ;
    schema:domainIncludes schema:MenuItem,
        schema:Recipe ;
    schema:rangeIncludes schema:RestrictedDiet ;
    rdfs:comment "Indicates a dietary restriction or guideline for which this recipe or menu item is suitable, e.g. diabetic, halal etc." .

schema:supportingData a rdf:Property ;
    rdfs:label "supportingData" ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:DataFeed ;
    rdfs:comment "Supporting data for a SoftwareApplication." .

schema:surface a rdf:Property ;
    rdfs:label "surface" ;
    schema:domainIncludes schema:VisualArtwork ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    schema:supersededBy schema:artworkSurface ;
    rdfs:comment "A material used as a surface in some artwork, e.g. Canvas, Paper, Wood, Board, etc." ;
    rdfs:subPropertyOf schema:material .

schema:target a rdf:Property ;
    rdfs:label "target" ;
    schema:domainIncludes schema:Action ;
    schema:rangeIncludes schema:EntryPoint ;
    rdfs:comment "Indicates a target EntryPoint for an Action." .

schema:targetDescription a rdf:Property ;
    rdfs:label "targetDescription" ;
    schema:domainIncludes schema:AlignmentObject ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The description of a node in an established educational framework." .

schema:targetName a rdf:Property ;
    rdfs:label "targetName" ;
    schema:domainIncludes schema:AlignmentObject ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The name of a node in an established educational framework." .

schema:targetPlatform a rdf:Property ;
    rdfs:label "targetPlatform" ;
    schema:domainIncludes schema:APIReference ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Type of app development: phone, Metro style, desktop, XBox, etc." .

schema:targetProduct a rdf:Property ;
    rdfs:label "targetProduct" ;
    schema:domainIncludes schema:SoftwareSourceCode ;
    schema:rangeIncludes schema:SoftwareApplication ;
    rdfs:comment "Target Operating System / Product to which the code applies.  If applies to several versions, just the product name can be used." .

schema:targetUrl a rdf:Property ;
    rdfs:label "targetUrl" ;
    schema:domainIncludes schema:AlignmentObject ;
    schema:rangeIncludes schema:URL ;
    rdfs:comment "The URL of a node in an established educational framework." .

schema:taxID a rdf:Property ;
    rdfs:label "taxID" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Organization,
        schema:Person ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain." ;
    rdfs:subPropertyOf schema:identifier .

schema:telephone a rdf:Property ;
    rdfs:label "telephone" ;
    schema:domainIncludes schema:ContactPoint,
        schema:Organization,
        schema:Person,
        schema:Place ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The telephone number." .

schema:temporal a rdf:Property ;
    rdfs:label "temporal" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:DateTime,
        schema:Text ;
    rdfs:comment """The "temporal" property can be used in cases where more specific properties
(e.g. <a class="localLink" href="http://schema.org/temporalCoverage">temporalCoverage</a>, <a class="localLink" href="http://schema.org/dateCreated">dateCreated</a>, <a class="localLink" href="http://schema.org/dateModified">dateModified</a>, <a class="localLink" href="http://schema.org/datePublished">datePublished</a>) are not known to be appropriate.""" .

schema:text a rdf:Property ;
    rdfs:label "text" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The textual content of this CreativeWork." .

schema:thumbnail a rdf:Property ;
    rdfs:label "thumbnail" ;
    schema:domainIncludes schema:ImageObject,
        schema:VideoObject ;
    schema:rangeIncludes schema:ImageObject ;
    rdfs:comment "Thumbnail image for an image or video." .

schema:thumbnailUrl a rdf:Property ;
    rdfs:label "thumbnailUrl" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:URL ;
    rdfs:comment "A thumbnail image relevant to the Thing." .

schema:tickerSymbol a rdf:Property ;
    rdfs:label "tickerSymbol" ;
    schema:domainIncludes schema:Corporation ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The exchange traded instrument associated with a Corporation object. The tickerSymbol is expressed as an exchange and an instrument name separated by a space character. For the exchange component of the tickerSymbol attribute, we recommend using the controlled vocabulary of Market Identifier Codes (MIC) specified in ISO15022." .

schema:ticketNumber a rdf:Property ;
    rdfs:label "ticketNumber" ;
    schema:domainIncludes schema:Ticket ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The unique identifier for the ticket." .

schema:ticketToken a rdf:Property ;
    rdfs:label "ticketToken" ;
    schema:domainIncludes schema:Ticket ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    rdfs:comment "Reference to an asset (e.g., Barcode, QR code image or PDF) usable for entrance." .

schema:ticketedSeat a rdf:Property ;
    rdfs:label "ticketedSeat" ;
    schema:domainIncludes schema:Ticket ;
    schema:rangeIncludes schema:Seat ;
    rdfs:comment "The seat associated with the ticket." .

schema:timeRequired a rdf:Property ;
    rdfs:label "timeRequired" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Duration ;
    rdfs:comment "Approximate or typical time it takes to work with or through this learning resource for the typical intended target audience, e.g. 'PT30M', 'PT1H25M'." .

schema:title a rdf:Property ;
    rdfs:label "title" ;
    schema:domainIncludes schema:JobPosting ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The title of the job." .

schema:toLocation a rdf:Property ;
    rdfs:label "toLocation" ;
    schema:domainIncludes schema:ExerciseAction,
        schema:InsertAction,
        schema:MoveAction,
        schema:TransferAction ;
    schema:rangeIncludes schema:Place ;
    rdfs:comment "A sub property of location. The final location of the object or the agent after the action." ;
    rdfs:subPropertyOf schema:location .

schema:toRecipient a rdf:Property ;
    rdfs:label "toRecipient" ;
    schema:domainIncludes schema:Message ;
    schema:rangeIncludes schema:Audience,
        schema:ContactPoint,
        schema:Organization,
        schema:Person ;
    rdfs:comment "A sub property of recipient. The recipient who was directly sent the message." ;
    rdfs:subPropertyOf schema:recipient .

schema:tool a rdf:Property ;
    rdfs:label "tool" ;
    schema:domainIncludes schema:HowTo,
        schema:HowToDirection ;
    schema:rangeIncludes schema:HowToTool,
        schema:Text ;
    rdfs:comment "A sub property of instrument. An object used (but not consumed) when performing instructions or a direction." ;
    rdfs:subPropertyOf schema:instrument .

schema:totalPaymentDue a rdf:Property ;
    rdfs:label "totalPaymentDue" ;
    schema:domainIncludes schema:Invoice ;
    schema:rangeIncludes schema:MonetaryAmount,
        schema:PriceSpecification ;
    rdfs:comment "The total amount due." .

schema:totalPrice a rdf:Property ;
    rdfs:label "totalPrice" ;
    schema:domainIncludes schema:Reservation,
        schema:Ticket ;
    schema:rangeIncludes schema:Number,
        schema:PriceSpecification,
        schema:Text ;
    rdfs:comment """The total price for the reservation or ticket, including applicable taxes, shipping, etc.<br/><br/>

Usage guidelines:<br/><br/>

<ul>
<li>Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.</li>
<li>Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.</li>
</ul>
""" .

schema:totalTime a rdf:Property ;
    rdfs:label "totalTime" ;
    schema:domainIncludes schema:HowTo,
        schema:HowToDirection ;
    schema:rangeIncludes schema:Duration ;
    rdfs:comment "The total time required to perform instructions or a direction (including time to prepare the supplies), in <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 duration format</a>." .

schema:touristType a rdf:Property ;
    rdfs:label "touristType" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#IIT-CNR.it>,
        <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Tourism> ;
    schema:category "issue-1810" ;
    schema:domainIncludes schema:TouristAttraction,
        schema:TouristDestination,
        schema:TouristTrip ;
    schema:rangeIncludes schema:Audience,
        schema:Text ;
    rdfs:comment "Attraction suitable for type(s) of tourist. eg. Children, visitors from a particular country, etc." .

schema:trackingNumber a rdf:Property ;
    rdfs:label "trackingNumber" ;
    schema:domainIncludes schema:ParcelDelivery ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Shipper tracking number." .

schema:trackingUrl a rdf:Property ;
    rdfs:label "trackingUrl" ;
    schema:domainIncludes schema:ParcelDelivery ;
    schema:rangeIncludes schema:URL ;
    rdfs:comment "Tracking url for the parcel delivery." .

schema:tracks a rdf:Property ;
    rdfs:label "tracks" ;
    schema:domainIncludes schema:MusicGroup,
        schema:MusicPlaylist ;
    schema:rangeIncludes schema:MusicRecording ;
    schema:supersededBy schema:track ;
    rdfs:comment "A music recording (track)&#x2014;usually a single song." .

schema:trailer a rdf:Property ;
    rdfs:label "trailer" ;
    schema:domainIncludes schema:CreativeWorkSeason,
        schema:Episode,
        schema:Movie,
        schema:MovieSeries,
        schema:RadioSeries,
        schema:TVSeries,
        schema:VideoGame,
        schema:VideoGameSeries ;
    schema:rangeIncludes schema:VideoObject ;
    rdfs:comment "The trailer of a movie or tv/radio series, season, episode, etc." .

schema:trainName a rdf:Property ;
    rdfs:label "trainName" ;
    schema:domainIncludes schema:TrainTrip ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The name of the train (e.g. The Orient Express)." .

schema:trainNumber a rdf:Property ;
    rdfs:label "trainNumber" ;
    schema:domainIncludes schema:TrainTrip ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The unique identifier for the train." .

schema:transFatContent a rdf:Property ;
    rdfs:label "transFatContent" ;
    schema:domainIncludes schema:NutritionInformation ;
    schema:rangeIncludes schema:Mass ;
    rdfs:comment "The number of grams of trans fat." .

schema:transcript a rdf:Property ;
    rdfs:label "transcript" ;
    schema:domainIncludes schema:AudioObject,
        schema:VideoObject ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "If this MediaObject is an AudioObject or VideoObject, the transcript of that object." .

schema:translator a rdf:Property ;
    rdfs:label "translator" ;
    schema:domainIncludes schema:CreativeWork,
        schema:Event ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    rdfs:comment "Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market, or that translates during some event." .

schema:typeOfBed a rdf:Property ;
    rdfs:label "typeOfBed" ;
    dct:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> ;
    schema:domainIncludes schema:BedDetails ;
    schema:rangeIncludes schema:BedType,
        schema:Text ;
    rdfs:comment "The type of bed to which the BedDetail refers, i.e. the type of bed available in the quantity indicated by quantity." .

schema:typeOfGood a rdf:Property ;
    rdfs:label "typeOfGood" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:OwnershipInfo,
        schema:TypeAndQuantityNode ;
    schema:rangeIncludes schema:Product,
        schema:Service ;
    rdfs:comment "The product that this structured value is referring to." .

schema:typicalAgeRange a rdf:Property ;
    rdfs:label "typicalAgeRange" ;
    schema:domainIncludes schema:CreativeWork,
        schema:Event ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The typical expected age range, e.g. '7-9', '11-'." .

schema:underName a rdf:Property ;
    rdfs:label "underName" ;
    schema:domainIncludes schema:Reservation,
        schema:Ticket ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    rdfs:comment "The person or organization the reservation or ticket is for." .

schema:unitCode a rdf:Property ;
    rdfs:label "unitCode" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:PropertyValue,
        schema:QuantitativeValue,
        schema:TypeAndQuantityNode,
        schema:UnitPriceSpecification ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    rdfs:comment "The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon." .

schema:unitText a rdf:Property ;
    rdfs:label "unitText" ;
    schema:domainIncludes schema:PropertyValue,
        schema:QuantitativeValue,
        schema:TypeAndQuantityNode,
        schema:UnitPriceSpecification ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment """A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for
<a href='unitCode'>unitCode</a>.""" .

schema:unsaturatedFatContent a rdf:Property ;
    rdfs:label "unsaturatedFatContent" ;
    schema:domainIncludes schema:NutritionInformation ;
    schema:rangeIncludes schema:Mass ;
    rdfs:comment "The number of grams of unsaturated fat." .

schema:uploadDate a rdf:Property ;
    rdfs:label "uploadDate" ;
    schema:domainIncludes schema:MediaObject ;
    schema:rangeIncludes schema:Date ;
    rdfs:comment "Date when this media object was uploaded to this site." .

schema:upvoteCount a rdf:Property ;
    rdfs:label "upvoteCount" ;
    schema:domainIncludes schema:Comment,
        schema:Question ;
    schema:rangeIncludes schema:Integer ;
    rdfs:comment "The number of upvotes this question, answer or comment has received from the community." .

schema:url a rdf:Property ;
    rdfs:label "url" ;
    schema:domainIncludes schema:Thing ;
    schema:rangeIncludes schema:URL ;
    rdfs:comment "URL of the item." .

schema:urlTemplate a rdf:Property ;
    rdfs:label "urlTemplate" ;
    schema:domainIncludes schema:EntryPoint ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "An url template (RFC6570) that will be used to construct the target of the execution of the action." .

schema:userInteractionCount a rdf:Property ;
    rdfs:label "userInteractionCount" ;
    schema:domainIncludes schema:InteractionCounter ;
    schema:rangeIncludes schema:Integer ;
    rdfs:comment "The number of interactions for the CreativeWork using the WebSite or SoftwareApplication." .

schema:validFor a rdf:Property ;
    rdfs:label "validFor" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1779> ;
    schema:category "issue-1779" ;
    schema:domainIncludes schema:EducationalOccupationalCredential,
        schema:Permit ;
    schema:rangeIncludes schema:Duration ;
    rdfs:comment "The duration of validity of a permit or similar thing." .

schema:validFrom a rdf:Property ;
    rdfs:label "validFrom" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Demand,
        schema:LocationFeatureSpecification,
        schema:MonetaryAmount,
        schema:Offer,
        schema:OpeningHoursSpecification,
        schema:Permit,
        schema:PriceSpecification ;
    schema:rangeIncludes schema:DateTime ;
    rdfs:comment "The date when the item becomes valid." .

schema:validIn a rdf:Property ;
    rdfs:label "validIn" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1779> ;
    schema:category "issue-1779" ;
    schema:domainIncludes schema:EducationalOccupationalCredential,
        schema:Permit ;
    schema:rangeIncludes schema:AdministrativeArea ;
    rdfs:comment "The geographic area where a permit or similar thing is valid." .

schema:validThrough a rdf:Property ;
    rdfs:label "validThrough" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Demand,
        schema:JobPosting,
        schema:LocationFeatureSpecification,
        schema:MonetaryAmount,
        schema:Offer,
        schema:OpeningHoursSpecification,
        schema:PriceSpecification ;
    schema:rangeIncludes schema:DateTime ;
    rdfs:comment "The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours." .

schema:validUntil a rdf:Property ;
    rdfs:label "validUntil" ;
    schema:domainIncludes schema:Permit ;
    schema:rangeIncludes schema:Date ;
    rdfs:comment "The date when the item is no longer valid." .

schema:value a rdf:Property ;
    rdfs:label "value" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:MonetaryAmount,
        schema:PropertyValue,
        schema:QuantitativeValue ;
    schema:rangeIncludes schema:Boolean,
        schema:Number,
        schema:StructuredValue,
        schema:Text ;
    rdfs:comment """The value of the quantitative value or property value node.<br/><br/>

<ul>
<li>For <a class="localLink" href="http://schema.org/QuantitativeValue">QuantitativeValue</a> and <a class="localLink" href="http://schema.org/MonetaryAmount">MonetaryAmount</a>, the recommended type for values is 'Number'.</li>
<li>For <a class="localLink" href="http://schema.org/PropertyValue">PropertyValue</a>, it can be 'Text;', 'Number', 'Boolean', or 'StructuredValue'.</li>
<li>Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.</li>
<li>Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.</li>
</ul>
""" .

schema:valueAddedTaxIncluded a rdf:Property ;
    rdfs:label "valueAddedTaxIncluded" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:PriceSpecification ;
    schema:rangeIncludes schema:Boolean ;
    rdfs:comment "Specifies whether the applicable value-added tax (VAT) is included in the price specification or not." .

schema:valueMaxLength a rdf:Property ;
    rdfs:label "valueMaxLength" ;
    schema:domainIncludes schema:PropertyValueSpecification ;
    schema:rangeIncludes schema:Number ;
    rdfs:comment "Specifies the allowed range for number of characters in a literal value." .

schema:valueMinLength a rdf:Property ;
    rdfs:label "valueMinLength" ;
    schema:domainIncludes schema:PropertyValueSpecification ;
    schema:rangeIncludes schema:Number ;
    rdfs:comment "Specifies the minimum allowed range for number of characters in a literal value." .

schema:valueName a rdf:Property ;
    rdfs:label "valueName" ;
    schema:domainIncludes schema:PropertyValueSpecification ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Indicates the name of the PropertyValueSpecification to be used in URL templates and form encoding in a manner analogous to HTML's input@name." .

schema:valuePattern a rdf:Property ;
    rdfs:label "valuePattern" ;
    schema:domainIncludes schema:PropertyValueSpecification ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Specifies a regular expression for testing literal values according to the HTML spec." .

schema:valueReference a rdf:Property ;
    rdfs:label "valueReference" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:PropertyValue,
        schema:QualitativeValue,
        schema:QuantitativeValue ;
    schema:rangeIncludes schema:Enumeration,
        schema:PropertyValue,
        schema:QualitativeValue,
        schema:QuantitativeValue,
        schema:StructuredValue ;
    rdfs:comment "A pointer to a secondary value that provides additional information on the original value, e.g. a reference temperature." .

schema:valueRequired a rdf:Property ;
    rdfs:label "valueRequired" ;
    schema:domainIncludes schema:PropertyValueSpecification ;
    schema:rangeIncludes schema:Boolean ;
    rdfs:comment "Whether the property must be filled in to complete the action.  Default is false." .

schema:vatID a rdf:Property ;
    rdfs:label "vatID" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Organization,
        schema:Person ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The Value-added Tax ID of the organization or person." .

schema:vehicleConfiguration a rdf:Property ;
    rdfs:label "vehicleConfiguration" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "A short text indicating the configuration of the vehicle, e.g. '5dr hatchback ST 2.5 MT 225 hp' or 'limited edition'." .

schema:vehicleEngine a rdf:Property ;
    rdfs:label "vehicleEngine" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:EngineSpecification ;
    rdfs:comment "Information about the engine or engines of the vehicle." .

schema:vehicleIdentificationNumber a rdf:Property ;
    rdfs:label "vehicleIdentificationNumber" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The Vehicle Identification Number (VIN) is a unique serial number used by the automotive industry to identify individual motor vehicles." ;
    rdfs:subPropertyOf schema:serialNumber .

schema:vehicleInteriorColor a rdf:Property ;
    rdfs:label "vehicleInteriorColor" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The color or color combination of the interior of the vehicle." .

schema:vehicleInteriorType a rdf:Property ;
    rdfs:label "vehicleInteriorType" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The type or material of the interior of the vehicle (e.g. synthetic fabric, leather, wood, etc.). While most interior types are characterized by the material used, an interior type can also be based on vehicle usage or target audience." .

schema:vehicleModelDate a rdf:Property ;
    rdfs:label "vehicleModelDate" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:Date ;
    rdfs:comment "The release date of a vehicle model (often used to differentiate versions of the same make and model)." .

schema:vehicleSeatingCapacity a rdf:Property ;
    rdfs:label "vehicleSeatingCapacity" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:Number,
        schema:QuantitativeValue ;
    rdfs:comment """The number of passengers that can be seated in the vehicle, both in terms of the physical space available, and in terms of limitations set by law.<br/><br/>

Typical unit code(s): C62 for persons.""" .

schema:vehicleTransmission a rdf:Property ;
    rdfs:label "vehicleTransmission" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:QualitativeValue,
        schema:Text,
        schema:URL ;
    rdfs:comment "The type of component used for transmitting the power from a rotating power source to the wheels or other relevant component(s) (\"gearbox\" for cars)." .

schema:vendor a rdf:Property ;
    rdfs:label "vendor" ;
    schema:domainIncludes schema:BuyAction ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    schema:supersededBy schema:seller ;
    rdfs:comment "'vendor' is an earlier term for 'seller'." ;
    rdfs:subPropertyOf schema:participant .

schema:version a rdf:Property ;
    rdfs:label "version" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Number,
        schema:Text ;
    rdfs:comment "The version of the CreativeWork embodied by a specified resource." .

schema:video a rdf:Property ;
    rdfs:label "video" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Clip,
        schema:VideoObject ;
    rdfs:comment "An embedded video object." .

schema:videoFormat a rdf:Property ;
    rdfs:label "videoFormat" ;
    schema:domainIncludes schema:BroadcastEvent,
        schema:BroadcastService,
        schema:ScreeningEvent ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The type of screening or video broadcast used (e.g. IMAX, 3D, SD, HD, etc.)." .

schema:videoFrameSize a rdf:Property ;
    rdfs:label "videoFrameSize" ;
    schema:domainIncludes schema:VideoObject ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The frame size of the video." .

schema:videoQuality a rdf:Property ;
    rdfs:label "videoQuality" ;
    schema:domainIncludes schema:VideoObject ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The quality of the video." .

schema:volumeNumber a rdf:Property ;
    rdfs:label "volumeNumber" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex> ;
    schema:domainIncludes schema:PublicationVolume ;
    schema:rangeIncludes schema:Integer,
        schema:Text ;
    rdfs:comment "Identifies the volume of publication or multi-part work; for example, \"iii\" or \"2\"." ;
    rdfs:subPropertyOf schema:position ;
    owl:equivalentProperty bibo:volume .

schema:warrantyPromise a rdf:Property ;
    rdfs:label "warrantyPromise" ;
    schema:domainIncludes schema:BuyAction,
        schema:SellAction ;
    schema:rangeIncludes schema:WarrantyPromise ;
    schema:supersededBy schema:warranty ;
    rdfs:comment "The warranty promise(s) included in the offer." .

schema:warrantyScope a rdf:Property ;
    rdfs:label "warrantyScope" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:WarrantyPromise ;
    schema:rangeIncludes schema:WarrantyScope ;
    rdfs:comment "The scope of the warranty promise." .

schema:webCheckinTime a rdf:Property ;
    rdfs:label "webCheckinTime" ;
    schema:domainIncludes schema:Flight ;
    schema:rangeIncludes schema:DateTime ;
    rdfs:comment "The time when a passenger can check into the flight online." .

schema:weight a rdf:Property ;
    rdfs:label "weight" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Person,
        schema:Product ;
    schema:rangeIncludes schema:QuantitativeValue ;
    rdfs:comment "The weight of the product or person." .

schema:width a rdf:Property ;
    rdfs:label "width" ;
    schema:domainIncludes schema:MediaObject,
        schema:Product,
        schema:VisualArtwork ;
    schema:rangeIncludes schema:Distance,
        schema:QuantitativeValue ;
    rdfs:comment "The width of the item." .

schema:winner a rdf:Property ;
    rdfs:label "winner" ;
    schema:domainIncludes schema:LoseAction ;
    schema:rangeIncludes schema:Person ;
    rdfs:comment "A sub property of participant. The winner of the action." ;
    rdfs:subPropertyOf schema:participant .

schema:wordCount a rdf:Property ;
    rdfs:label "wordCount" ;
    schema:domainIncludes schema:Article ;
    schema:rangeIncludes schema:Integer ;
    rdfs:comment "The number of words in the text of the Article." .

schema:workHours a rdf:Property ;
    rdfs:label "workHours" ;
    schema:domainIncludes schema:JobPosting ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The typical working hours for this job (e.g. 1st shift, night shift, 8am-5pm)." .

schema:workLocation a rdf:Property ;
    rdfs:label "workLocation" ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:ContactPoint,
        schema:Place ;
    rdfs:comment "A contact location for a person's place of work." ;
    rdfs:subPropertyOf schema:location .

schema:workPerformed a rdf:Property ;
    rdfs:label "workPerformed" ;
    schema:domainIncludes schema:Event ;
    schema:rangeIncludes schema:CreativeWork ;
    rdfs:comment "A work performed in some event, for example a play performed in a TheaterEvent." ;
    rdfs:subPropertyOf schema:workFeatured .

schema:workPresented a rdf:Property ;
    rdfs:label "workPresented" ;
    schema:domainIncludes schema:ScreeningEvent ;
    schema:rangeIncludes schema:Movie ;
    rdfs:comment "The movie presented during this event." ;
    rdfs:subPropertyOf schema:workFeatured .

schema:worksFor a rdf:Property ;
    rdfs:label "worksFor" ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Organization ;
    rdfs:comment "Organizations that the person works for." .

schema:worstRating a rdf:Property ;
    rdfs:label "worstRating" ;
    schema:domainIncludes schema:Rating ;
    schema:rangeIncludes schema:Number,
        schema:Text ;
    rdfs:comment "The lowest value allowed in this rating system. If worstRating is omitted, 1 is assumed." .

schema:xpath a rdf:Property ;
    rdfs:label "xpath" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1389> ;
    schema:category "issue-1389" ;
    schema:domainIncludes schema:SpeakableSpecification,
        schema:WebPageElement ;
    schema:rangeIncludes schema:XPathType ;
    rdfs:comment "An XPath, e.g. of a <a class=\"localLink\" href=\"http://schema.org/SpeakableSpecification\">SpeakableSpecification</a> or <a class=\"localLink\" href=\"http://schema.org/WebPageElement\">WebPageElement</a>. In the latter case, multiple matches within a page can constitute a single conceptual \"Web page element\"." .

schema:yearlyRevenue a rdf:Property ;
    rdfs:label "yearlyRevenue" ;
    schema:domainIncludes schema:BusinessAudience ;
    schema:rangeIncludes schema:QuantitativeValue ;
    rdfs:comment "The size of the business in annual revenue." .

schema:yearsInOperation a rdf:Property ;
    rdfs:label "yearsInOperation" ;
    schema:domainIncludes schema:BusinessAudience ;
    schema:rangeIncludes schema:QuantitativeValue ;
    rdfs:comment "The age of the business." .

schema:actionApplication a rdf:Property ;
    rdfs:label "actionApplication" ;
    schema:domainIncludes schema:EntryPoint ;
    schema:rangeIncludes schema:SoftwareApplication ;
    rdfs:comment "An application that can complete the request." .

schema:actionOption a rdf:Property ;
    rdfs:label "actionOption" ;
    schema:domainIncludes schema:ChooseAction ;
    schema:rangeIncludes schema:Text,
        schema:Thing ;
    rdfs:comment "A sub property of object. The options subject to this action." ;
    rdfs:subPropertyOf schema:object .

schema:actor a rdf:Property ;
    rdfs:label "actor" ;
    schema:domainIncludes schema:Clip,
        schema:CreativeWorkSeason,
        schema:Episode,
        schema:Event,
        schema:Movie,
        schema:MovieSeries,
        schema:RadioSeries,
        schema:TVSeries,
        schema:VideoGame,
        schema:VideoGameSeries,
        schema:VideoObject ;
    schema:rangeIncludes schema:Person ;
    rdfs:comment "An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip." .

schema:album a rdf:Property ;
    rdfs:label "album" ;
    schema:domainIncludes schema:MusicGroup ;
    schema:rangeIncludes schema:MusicAlbum ;
    rdfs:comment "A music album." .

schema:albumRelease a rdf:Property ;
    rdfs:label "albumRelease" ;
    schema:domainIncludes schema:MusicAlbum ;
    schema:inverseOf schema:releaseOf ;
    schema:rangeIncludes schema:MusicRelease ;
    rdfs:comment "A release of this album." .

schema:alumni a rdf:Property ;
    rdfs:label "alumni" ;
    schema:domainIncludes schema:EducationalOrganization,
        schema:Organization ;
    schema:inverseOf schema:alumniOf ;
    schema:rangeIncludes schema:Person ;
    rdfs:comment "Alumni of an organization." .

schema:alumniOf a rdf:Property ;
    rdfs:label "alumniOf" ;
    schema:domainIncludes schema:Person ;
    schema:inverseOf schema:alumni ;
    schema:rangeIncludes schema:EducationalOrganization,
        schema:Organization ;
    rdfs:comment "An organization that the person is an alumni of." .

schema:artworkSurface a rdf:Property ;
    rdfs:label "artworkSurface" ;
    schema:domainIncludes schema:VisualArtwork ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    rdfs:comment "The supporting materials for the artwork, e.g. Canvas, Paper, Wood, Board, etc." .

schema:attendee a rdf:Property ;
    rdfs:label "attendee" ;
    schema:domainIncludes schema:Event ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    rdfs:comment "A person or organization attending the event." .

schema:audience a rdf:Property ;
    rdfs:label "audience" ;
    schema:domainIncludes schema:CreativeWork,
        schema:Event,
        schema:LodgingBusiness,
        schema:PlayAction,
        schema:Product,
        schema:Service ;
    schema:rangeIncludes schema:Audience ;
    rdfs:comment "An intended audience, i.e. a group for whom something was created." .

schema:availableOnDevice a rdf:Property ;
    rdfs:label "availableOnDevice" ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Device required to run the application. Used in cases where a specific make/model is required to run the application." .

schema:award a rdf:Property ;
    rdfs:label "award" ;
    schema:domainIncludes schema:CreativeWork,
        schema:Organization,
        schema:Person,
        schema:Product,
        schema:Service ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "An award won by or for this item." .

schema:blogPost a rdf:Property ;
    rdfs:label "blogPost" ;
    schema:domainIncludes schema:Blog ;
    schema:rangeIncludes schema:BlogPosting ;
    rdfs:comment "A posting that is part of this blog." .

schema:broker a rdf:Property ;
    rdfs:label "broker" ;
    schema:domainIncludes schema:Invoice,
        schema:Order,
        schema:Reservation,
        schema:Service ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    rdfs:comment "An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred." .

schema:codeSampleType a rdf:Property ;
    rdfs:label "codeSampleType" ;
    schema:domainIncludes schema:SoftwareSourceCode ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "What type of code sample: full (compile ready) solution, code snippet, inline code, scripts, template." .

schema:colleague a rdf:Property ;
    rdfs:label "colleague" ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Person,
        schema:URL ;
    rdfs:comment "A colleague of the person." .

schema:contactPoint a rdf:Property ;
    rdfs:label "contactPoint" ;
    schema:domainIncludes schema:HealthInsurancePlan,
        schema:Organization,
        schema:Person ;
    schema:rangeIncludes schema:ContactPoint ;
    rdfs:comment "A contact point for a person or organization." .

schema:containsPlace a rdf:Property ;
    rdfs:label "containsPlace" ;
    schema:domainIncludes schema:Place ;
    schema:inverseOf schema:containedInPlace ;
    schema:rangeIncludes schema:Place ;
    rdfs:comment "The basic containment relation between a place and another that it contains." .

schema:containsSeason a rdf:Property ;
    rdfs:label "containsSeason" ;
    schema:domainIncludes schema:RadioSeries,
        schema:TVSeries,
        schema:VideoGameSeries ;
    schema:rangeIncludes schema:CreativeWorkSeason ;
    rdfs:comment "A season that is part of the media series." ;
    rdfs:subPropertyOf schema:hasPart .

schema:contentLocation a rdf:Property ;
    rdfs:label "contentLocation" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Place ;
    rdfs:comment "The location depicted or described in the content. For example, the location in a photograph or painting." .

schema:dataset a rdf:Property ;
    rdfs:label "dataset" ;
    schema:domainIncludes schema:DataCatalog ;
    schema:inverseOf schema:includedInDataCatalog ;
    schema:rangeIncludes schema:Dataset ;
    rdfs:comment "A dataset contained in this catalog." .

schema:description a rdf:Property ;
    rdfs:label "description" ;
    schema:domainIncludes schema:Thing ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "A description of the item." ;
    owl:equivalentProperty dct:description .

schema:director a rdf:Property ;
    rdfs:label "director" ;
    schema:domainIncludes schema:Clip,
        schema:CreativeWorkSeason,
        schema:Episode,
        schema:Event,
        schema:Movie,
        schema:MovieSeries,
        schema:RadioSeries,
        schema:TVSeries,
        schema:VideoGame,
        schema:VideoGameSeries,
        schema:VideoObject ;
    schema:rangeIncludes schema:Person ;
    rdfs:comment "A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip." .

schema:duration a rdf:Property ;
    rdfs:label "duration" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1698> ;
    schema:category "issue-1698" ;
    schema:domainIncludes schema:Audiobook,
        schema:Event,
        schema:MediaObject,
        schema:Movie,
        schema:MusicRecording,
        schema:MusicRelease,
        schema:QuantitativeValueDistribution ;
    schema:rangeIncludes schema:Duration ;
    rdfs:comment "The duration of the item (movie, audio recording, event, etc.) in <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 date format</a>." .

schema:employee a rdf:Property ;
    rdfs:label "employee" ;
    schema:domainIncludes schema:Organization ;
    schema:rangeIncludes schema:Person ;
    rdfs:comment "Someone working for this organization." .

schema:encodesCreativeWork a rdf:Property ;
    rdfs:label "encodesCreativeWork" ;
    schema:domainIncludes schema:MediaObject ;
    schema:inverseOf schema:encoding ;
    schema:rangeIncludes schema:CreativeWork ;
    rdfs:comment "The CreativeWork encoded by this media object." .

schema:encodingFormat a rdf:Property ;
    rdfs:label "encodingFormat" ;
    schema:domainIncludes schema:CreativeWork,
        schema:MediaObject ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    rdfs:comment """Media type typically expressed using a MIME format (see <a href="http://www.iana.org/assignments/media-types/media-types.xhtml">IANA site</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types">MDN reference</a>) e.g. application/zip for a SoftwareApplication binary, audio/mpeg for .mp3 etc.).<br/><br/>

In cases where a <a class="localLink" href="http://schema.org/CreativeWork">CreativeWork</a> has several media type representations, <a class="localLink" href="http://schema.org/encoding">encoding</a> can be used to indicate each <a class="localLink" href="http://schema.org/MediaObject">MediaObject</a> alongside particular <a class="localLink" href="http://schema.org/encodingFormat">encodingFormat</a> information.<br/><br/>

Unregistered or niche encoding and file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia/Wikidata entry.""" .

schema:episode a rdf:Property ;
    rdfs:label "episode" ;
    schema:domainIncludes schema:CreativeWorkSeason,
        schema:RadioSeries,
        schema:TVSeries,
        schema:VideoGameSeries ;
    schema:rangeIncludes schema:Episode ;
    rdfs:comment "An episode of a tv, radio or game media within a series or season." ;
    rdfs:subPropertyOf schema:hasPart .

schema:event a rdf:Property ;
    rdfs:label "event" ;
    schema:domainIncludes schema:InformAction,
        schema:InviteAction,
        schema:JoinAction,
        schema:LeaveAction,
        schema:Organization,
        schema:Place,
        schema:PlayAction ;
    schema:rangeIncludes schema:Event ;
    rdfs:comment "Upcoming or past event associated with this place, organization, or action." .

schema:exampleOfWork a rdf:Property ;
    rdfs:label "exampleOfWork" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex> ;
    schema:domainIncludes schema:CreativeWork ;
    schema:inverseOf schema:workExample ;
    schema:rangeIncludes schema:CreativeWork ;
    rdfs:comment "A creative work that this work is an example/instance/realization/derivation of." .

schema:executableLibraryName a rdf:Property ;
    rdfs:label "executableLibraryName" ;
    schema:domainIncludes schema:APIReference ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Library file name e.g., mscorlib.dll, system.web.dll." .

schema:exerciseCourse a rdf:Property ;
    rdfs:label "exerciseCourse" ;
    schema:domainIncludes schema:ExerciseAction ;
    schema:rangeIncludes schema:Place ;
    rdfs:comment "A sub property of location. The course where this action was taken." ;
    rdfs:subPropertyOf schema:location .

schema:founder a rdf:Property ;
    rdfs:label "founder" ;
    schema:domainIncludes schema:Organization ;
    schema:rangeIncludes schema:Person ;
    rdfs:comment "A person who founded this organization." .

schema:game a rdf:Property ;
    rdfs:label "game" ;
    schema:domainIncludes schema:GameServer ;
    schema:inverseOf schema:gameServer ;
    schema:rangeIncludes schema:VideoGame ;
    rdfs:comment "Video game which is played on this server." .

schema:gameServer a rdf:Property ;
    rdfs:label "gameServer" ;
    schema:domainIncludes schema:VideoGame ;
    schema:inverseOf schema:game ;
    schema:rangeIncludes schema:GameServer ;
    rdfs:comment "The server on which  it is possible to play the game." .

schema:hasBroadcastChannel a rdf:Property ;
    rdfs:label "hasBroadcastChannel" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1004> ;
    schema:category "issue-1004" ;
    schema:domainIncludes schema:BroadcastService ;
    schema:inverseOf schema:providesBroadcastService ;
    schema:rangeIncludes schema:BroadcastChannel ;
    rdfs:comment "A broadcast channel of a broadcast service." .

schema:hasMenu a rdf:Property ;
    rdfs:label "hasMenu" ;
    schema:domainIncludes schema:FoodEstablishment ;
    schema:rangeIncludes schema:Menu,
        schema:Text,
        schema:URL ;
    rdfs:comment "Either the actual menu as a structured representation, as text, or a URL of the menu." .

schema:inLanguage a rdf:Property ;
    rdfs:label "inLanguage" ;
    schema:domainIncludes schema:CommunicateAction,
        schema:CreativeWork,
        schema:Event,
        schema:LinkRole,
        schema:WriteAction ;
    schema:rangeIncludes schema:Language,
        schema:Text ;
    rdfs:comment "The language of the content or performance or used in an action. Please use one of the language codes from the <a href=\"http://tools.ietf.org/html/bcp47\">IETF BCP 47 standard</a>. See also <a class=\"localLink\" href=\"http://schema.org/availableLanguage\">availableLanguage</a>." .

schema:incentiveCompensation a rdf:Property ;
    rdfs:label "incentiveCompensation" ;
    schema:domainIncludes schema:JobPosting ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Description of bonus and commission compensation aspects of the job." .

schema:interactionStatistic a rdf:Property ;
    rdfs:label "interactionStatistic" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:InteractionCounter ;
    rdfs:comment "The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used." .

schema:isAccessibleForFree a rdf:Property ;
    rdfs:label "isAccessibleForFree" ;
    schema:domainIncludes schema:CreativeWork,
        schema:Event,
        schema:Place,
        schema:PublicationEvent ;
    schema:rangeIncludes schema:Boolean ;
    rdfs:comment "A flag to signal that the item, event, or place is accessible for free." .

schema:isBasedOn a rdf:Property ;
    rdfs:label "isBasedOn" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:CreativeWork,
        schema:Product,
        schema:URL ;
    rdfs:comment "A resource from which this work is derived or from which it is a modification or adaption." .

schema:jobBenefits a rdf:Property ;
    rdfs:label "jobBenefits" ;
    schema:domainIncludes schema:JobPosting ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Description of benefits associated with the job." .

schema:mainEntity a rdf:Property ;
    rdfs:label "mainEntity" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:inverseOf schema:mainEntityOfPage ;
    schema:rangeIncludes schema:Thing ;
    rdfs:comment "Indicates the primary entity described in some page or other CreativeWork." ;
    rdfs:subPropertyOf schema:about .

schema:mainEntityOfPage a rdf:Property ;
    rdfs:label "mainEntityOfPage" ;
    schema:domainIncludes schema:Thing ;
    schema:inverseOf schema:mainEntity ;
    schema:rangeIncludes schema:CreativeWork,
        schema:URL ;
    rdfs:comment "Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See <a href=\"/docs/datamodel.html#mainEntityBackground\">background notes</a> for details." .

schema:makesOffer a rdf:Property ;
    rdfs:label "makesOffer" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Organization,
        schema:Person ;
    schema:inverseOf schema:offeredBy ;
    schema:rangeIncludes schema:Offer ;
    rdfs:comment "A pointer to products or services offered by the organization or person." .

schema:offeredBy a rdf:Property ;
    rdfs:label "offeredBy" ;
    schema:domainIncludes schema:Offer ;
    schema:inverseOf schema:makesOffer ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    rdfs:comment "A pointer to the organization or person making the offer." .

schema:parent a rdf:Property ;
    rdfs:label "parent" ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Person ;
    rdfs:comment "A parent of this person." .

schema:partOfSeries a rdf:Property ;
    rdfs:label "partOfSeries" ;
    schema:domainIncludes schema:Clip,
        schema:CreativeWorkSeason,
        schema:Episode ;
    schema:rangeIncludes schema:CreativeWorkSeries ;
    rdfs:comment "The series to which this episode or season belongs." ;
    rdfs:subPropertyOf schema:isPartOf .

schema:paymentDueDate a rdf:Property ;
    rdfs:label "paymentDueDate" ;
    schema:domainIncludes schema:Invoice,
        schema:Order ;
    schema:rangeIncludes schema:DateTime ;
    rdfs:comment "The date that payment is due." .

schema:performTime a rdf:Property ;
    rdfs:label "performTime" ;
    schema:domainIncludes schema:HowTo,
        schema:HowToDirection ;
    schema:rangeIncludes schema:Duration ;
    rdfs:comment "The length of time it takes to perform instructions or a direction (not including time to prepare the supplies), in <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 duration format</a>." .

schema:performer a rdf:Property ;
    rdfs:label "performer" ;
    schema:domainIncludes schema:Event ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    rdfs:comment "A performer at the event&#x2014;for example, a presenter, musician, musical group or actor." .

schema:photo a rdf:Property ;
    rdfs:label "photo" ;
    schema:domainIncludes schema:Place ;
    schema:rangeIncludes schema:ImageObject,
        schema:Photograph ;
    rdfs:comment "A photograph of this place." ;
    rdfs:subPropertyOf schema:image .

schema:provider a rdf:Property ;
    rdfs:label "provider" ;
    schema:domainIncludes schema:CreativeWork,
        schema:Invoice,
        schema:ParcelDelivery,
        schema:Reservation,
        schema:Service,
        schema:Trip ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    rdfs:comment "The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller." .

schema:providesBroadcastService a rdf:Property ;
    rdfs:label "providesBroadcastService" ;
    schema:domainIncludes schema:BroadcastChannel ;
    schema:inverseOf schema:hasBroadcastChannel ;
    schema:rangeIncludes schema:BroadcastService ;
    rdfs:comment "The BroadcastService offered on this channel." .

schema:recipeIngredient a rdf:Property ;
    rdfs:label "recipeIngredient" ;
    schema:domainIncludes schema:Recipe ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "A single ingredient used in the recipe, e.g. sugar, flour or garlic." ;
    rdfs:subPropertyOf schema:supply .

schema:recordedAs a rdf:Property ;
    rdfs:label "recordedAs" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    schema:domainIncludes schema:MusicComposition ;
    schema:inverseOf schema:recordingOf ;
    schema:rangeIncludes schema:MusicRecording ;
    rdfs:comment "An audio recording of the work." .

schema:recordedAt a rdf:Property ;
    rdfs:label "recordedAt" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:inverseOf schema:recordedIn ;
    schema:rangeIncludes schema:Event ;
    rdfs:comment "The Event where the CreativeWork was recorded. The CreativeWork may capture all or part of the event." .

schema:recordedIn a rdf:Property ;
    rdfs:label "recordedIn" ;
    schema:domainIncludes schema:Event ;
    schema:inverseOf schema:recordedAt ;
    schema:rangeIncludes schema:CreativeWork ;
    rdfs:comment "The CreativeWork that captured all or part of this Event." .

schema:recordingOf a rdf:Property ;
    rdfs:label "recordingOf" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    schema:domainIncludes schema:MusicRecording ;
    schema:inverseOf schema:recordedAs ;
    schema:rangeIncludes schema:MusicComposition ;
    rdfs:comment "The composition this track is a recording of." .

schema:releaseOf a rdf:Property ;
    rdfs:label "releaseOf" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    schema:domainIncludes schema:MusicRelease ;
    schema:inverseOf schema:albumRelease ;
    schema:rangeIncludes schema:MusicAlbum ;
    rdfs:comment "The album this is a release of." .

schema:review a rdf:Property ;
    rdfs:label "review" ;
    schema:domainIncludes schema:Brand,
        schema:CreativeWork,
        schema:Event,
        schema:Offer,
        schema:Organization,
        schema:Place,
        schema:Product,
        schema:Service ;
    schema:rangeIncludes schema:Review ;
    rdfs:comment "A review of the item." .

schema:roleName a rdf:Property ;
    rdfs:label "roleName" ;
    schema:domainIncludes schema:Role ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    rdfs:comment "A role played, performed or filled by a person or organization. For example, the team of creators for a comic book might fill the roles named 'inker', 'penciller', and 'letterer'; or an athlete in a SportsTeam might play in the position named 'Quarterback'." .

schema:runtimePlatform a rdf:Property ;
    rdfs:label "runtimePlatform" ;
    schema:domainIncludes schema:SoftwareSourceCode ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "Runtime platform or script interpreter dependencies (Example - Java v1, Python2.3, .Net Framework 3.0)." .

schema:season a rdf:Property ;
    rdfs:label "season" ;
    schema:domainIncludes schema:RadioSeries,
        schema:TVSeries,
        schema:VideoGameSeries ;
    schema:rangeIncludes schema:CreativeWorkSeason ;
    schema:supersededBy schema:containsSeason ;
    rdfs:comment "A season in a media series." ;
    rdfs:subPropertyOf schema:hasPart .

schema:serialNumber a rdf:Property ;
    rdfs:label "serialNumber" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Demand,
        schema:IndividualProduct,
        schema:Offer ;
    schema:rangeIncludes schema:Text ;
    rdfs:comment "The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer." ;
    rdfs:subPropertyOf schema:identifier .

schema:serviceArea a rdf:Property ;
    rdfs:label "serviceArea" ;
    schema:domainIncludes schema:ContactPoint,
        schema:Organization,
        schema:Service ;
    schema:rangeIncludes schema:AdministrativeArea,
        schema:GeoShape,
        schema:Place ;
    schema:supersededBy schema:areaServed ;
    rdfs:comment "The geographic area where the service is provided." .

schema:serviceOutput a rdf:Property ;
    rdfs:label "serviceOutput" ;
    schema:domainIncludes schema:Service ;
    schema:rangeIncludes schema:Thing ;
    rdfs:comment "The tangible thing generated by the service, e.g. a passport, permit, etc." .

schema:sibling a rdf:Property ;
    rdfs:label "sibling" ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Person ;
    rdfs:comment "A sibling of the person." .

schema:significantLink a rdf:Property ;
    rdfs:label "significantLink" ;
    schema:domainIncludes schema:WebPage ;
    schema:rangeIncludes schema:URL ;
    rdfs:comment "One of the more significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most." .

schema:softwareRequirements a rdf:Property ;
    rdfs:label "softwareRequirements" ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    rdfs:comment "Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (Examples: DirectX, Java or .NET runtime)." .

schema:sponsor a rdf:Property ;
    rdfs:label "sponsor" ;
    schema:domainIncludes schema:CreativeWork,
        schema:Event,
        schema:Grant,
        schema:MedicalStudy,
        schema:Organization,
        schema:Person ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    rdfs:comment "A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event." .

schema:subOrganization a rdf:Property ;
    rdfs:label "subOrganization" ;
    schema:domainIncludes schema:Organization ;
    schema:inverseOf schema:parentOrganization ;
    schema:rangeIncludes schema:Organization ;
    rdfs:comment "A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific 'department' property." .

schema:subjectOf a rdf:Property ;
    rdfs:label "subjectOf" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1670> ;
    schema:category "issue-1670" ;
    schema:domainIncludes schema:Thing ;
    schema:inverseOf schema:about ;
    schema:rangeIncludes schema:CreativeWork,
        schema:Event ;
    rdfs:comment "A CreativeWork or Event about this Thing.." .

schema:suggestedAnswer a rdf:Property ;
    rdfs:label "suggestedAnswer" ;
    schema:domainIncludes schema:Question ;
    schema:rangeIncludes schema:Answer,
        schema:ItemList ;
    rdfs:comment "An answer (possibly one of several, possibly incorrect) to a Question, e.g. on a Question/Answer site." .

schema:superEvent a rdf:Property ;
    rdfs:label "superEvent" ;
    schema:domainIncludes schema:Event ;
    schema:inverseOf schema:subEvent ;
    schema:rangeIncludes schema:Event ;
    rdfs:comment "An event that this event is a part of. For example, a collection of individual music performances might each have a music festival as their superEvent." .

schema:targetCollection a rdf:Property ;
    rdfs:label "targetCollection" ;
    schema:domainIncludes schema:UpdateAction ;
    schema:rangeIncludes schema:Thing ;
    rdfs:comment "A sub property of object. The collection target of the action." ;
    rdfs:subPropertyOf schema:object .

schema:temporalCoverage a rdf:Property ;
    rdfs:label "temporalCoverage" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:DateTime,
        schema:Text,
        schema:URL ;
    rdfs:comment """The temporalCoverage of a CreativeWork indicates the period that the content applies to, i.e. that it describes, either as a DateTime or as a textual string indicating a time period in <a href="https://en.wikipedia.org/wiki/ISO_8601#Time_intervals">ISO 8601 time interval format</a>. In
      the case of a Dataset it will typically indicate the relevant time period in a precise notation (e.g. for a 2011 census dataset, the year 2011 would be written "2011/2012"). Other forms of content e.g. ScholarlyArticle, Book, TVSeries or TVEpisode may indicate their temporalCoverage in broader terms - textually or via well-known URL.
      Written works such as books may sometimes have precise temporal coverage too, e.g. a work set in 1939 - 1945 can be indicated in ISO 8601 interval format format via "1939/1945".<br/><br/>

Open-ended date ranges can be written with ".." in place of the end date. For example, "2015-11/.." indicates a range beginning in November 2015 and with no specified final date. This is tentative and might be updated in future when ISO 8601 is officially updated.""" ;
    owl:equivalentProperty dct:temporal .

schema:track a rdf:Property ;
    rdfs:label "track" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> ;
    schema:domainIncludes schema:MusicGroup,
        schema:MusicPlaylist ;
    schema:rangeIncludes schema:ItemList,
        schema:MusicRecording ;
    rdfs:comment "A music recording (track)&#x2014;usually a single song. If an ItemList is given, the list should contain items of type MusicRecording." .

schema:warranty a rdf:Property ;
    rdfs:label "warranty" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;
    schema:domainIncludes schema:Demand,
        schema:Offer ;
    schema:rangeIncludes schema:WarrantyPromise ;
    rdfs:comment "The warranty promise(s) included in the offer." .

schema:workExample a rdf:Property ;
    rdfs:label "workExample" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex> ;
    schema:domainIncludes schema:CreativeWork ;
    schema:inverseOf schema:exampleOfWork ;
    schema:rangeIncludes schema:CreativeWork ;
    rdfs:comment "Example/instance/realization/derivation of the concept of this creative work. eg. The paperback edition, first edition, or eBook." .

schema:yield a rdf:Property ;
    rdfs:label "yield" ;
    schema:domainIncludes schema:HowTo ;
    schema:rangeIncludes schema:QuantitativeValue,
        schema:Text ;
    rdfs:comment "The quantity that results by performing instructions. For example, a paper airplane, 10 personalized candles." .

schema:about a rdf:Property ;
    rdfs:label "about" ;
    dct:source <https://github.com/schemaorg/schemaorg/issues/1670> ;
    schema:category "issue-1670" ;
    schema:domainIncludes schema:CommunicateAction,
        schema:CreativeWork,
        schema:Event ;
    schema:inverseOf schema:subjectOf ;
    schema:rangeIncludes schema:Thing ;
    rdfs:comment "The subject matter of the content." .

schema:competitor a rdf:Property ;
    rdfs:label "competitor" ;
    schema:domainIncludes schema:SportsEvent ;
    schema:rangeIncludes schema:Person,
        schema:SportsTeam ;
    rdfs:comment "A competitor in a sports event." .

schema:containedInPlace a rdf:Property ;
    rdfs:label "containedInPlace" ;
    schema:domainIncludes schema:Place ;
    schema:inverseOf schema:containsPlace ;
    schema:rangeIncludes schema:Place ;
    rdfs:comment "The basic containment relation between a place and one that contains it." .

schema:encoding a rdf:Property ;
    rdfs:label "encoding" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:inverseOf schema:encodesCreativeWork ;
    schema:rangeIncludes schema:MediaObject ;
    rdfs:comment "A media object that encodes this CreativeWork. This property is a synonym for associatedMedia." .

schema:hasMap a rdf:Property ;
    rdfs:label "hasMap" ;
    schema:domainIncludes schema:Place ;
    schema:rangeIncludes schema:Map,
        schema:URL ;
    rdfs:comment "A URL to a map of the place." .

schema:image a rdf:Property ;
    rdfs:label "image" ;
    schema:domainIncludes schema:Thing ;
    schema:rangeIncludes schema:ImageObject,
        schema:URL ;
    rdfs:comment "An image of the item. This can be a <a class=\"localLink\" href=\"http://schema.org/URL\">URL</a> or a fully described <a class=\"localLink\" href=\"http://schema.org/ImageObject\">ImageObject</a>." .

schema:material a rdf:Property ;
    rdfs:label "material" ;
    schema:domainIncludes schema:CreativeWork,
        schema:Product ;
    schema:rangeIncludes schema:Product,
        schema:Text,
        schema:URL ;
    rdfs:comment "A material that something is made from, e.g. leather, wool, cotton, paper." .

schema:memberOf a rdf:Property ;
    rdfs:label "memberOf" ;
    schema:domainIncludes schema:Organization,
        schema:Person ;
    schema:inverseOf schema:member ;
    schema:rangeIncludes schema:Organization,
        schema:ProgramMembership ;
    rdfs:comment "An Organization (or ProgramMembership) to which this Person or Organization belongs." .

schema:parentOrganization a rdf:Property ;
    rdfs:label "parentOrganization" ;
    schema:domainIncludes schema:Organization ;
    schema:inverseOf schema:subOrganization ;
    schema:rangeIncludes schema:Organization ;
    rdfs:comment "The larger organization that this organization is a <a class=\"localLink\" href=\"http://schema.org/subOrganization\">subOrganization</a> of, if any." .

schema:result a rdf:Property ;
    rdfs:label "result" ;
    schema:domainIncludes schema:Action ;
    schema:rangeIncludes schema:Thing ;
    rdfs:comment "The result produced in the action. e.g. John wrote <em>a book</em>." .

schema:seller a rdf:Property ;
    rdfs:label "seller" ;
    schema:domainIncludes schema:BuyAction,
        schema:Demand,
        schema:Flight,
        schema:Offer,
        schema:Order ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    rdfs:comment "An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider." ;
    rdfs:subPropertyOf schema:participant .

schema:step a rdf:Property ;
    rdfs:label "step" ;
    schema:domainIncludes schema:HowTo ;
    schema:rangeIncludes schema:CreativeWork,
        schema:HowToSection,
        schema:HowToStep,
        schema:Text ;
    rdfs:comment "A single step item (as HowToStep, text, document, video, etc.) or a HowToSection." .

schema:subEvent a rdf:Property ;
    rdfs:label "subEvent" ;
    schema:domainIncludes schema:Event ;
    schema:inverseOf schema:superEvent ;
    schema:rangeIncludes schema:Event ;
    rdfs:comment "An Event that is part of this event. For example, a conference event includes many presentations, each of which is a subEvent of the conference." .

schema:supply a rdf:Property ;
    rdfs:label "supply" ;
    schema:domainIncludes schema:HowTo,
        schema:HowToDirection ;
    schema:rangeIncludes schema:HowToSupply,
        schema:Text ;
    rdfs:comment "A sub-property of instrument. A supply consumed when performing instructions or a direction." ;
    rdfs:subPropertyOf schema:instrument .

schema:workFeatured a rdf:Property ;
    rdfs:label "workFeatured" ;
    schema:domainIncludes schema:Event ;
    schema:rangeIncludes schema:CreativeWork ;
    rdfs:comment """A work featured in some event, e.g. exhibited in an ExhibitionEvent.
       Specific subproperties are available for workPerformed (e.g. a play), or a workPresented (a Movie at a ScreeningEvent).""" .

schema:areaServed a rdf:Property ;
    rdfs:label "areaServed" ;
    schema:domainIncludes schema:ContactPoint,
        schema:DeliveryChargeSpecification,
        schema:Demand,
        schema:Offer,
        schema:Organization,
        schema:Service ;
    schema:rangeIncludes schema:AdministrativeArea,
        schema:GeoShape,
        schema:Place,
        schema:Text ;
    rdfs:comment "The geographic area where a service or offered item is provided." .

schema:includedInDataCatalog a rdf:Property ;
    rdfs:label "includedInDataCatalog" ;
    schema:domainIncludes schema:Dataset ;
    schema:inverseOf schema:dataset ;
    schema:rangeIncludes schema:DataCatalog ;
    rdfs:comment "A data catalog which contains this dataset." .

schema:member a rdf:Property ;
    rdfs:label "member" ;
    schema:domainIncludes schema:Organization,
        schema:ProgramMembership ;
    schema:inverseOf schema:memberOf ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    rdfs:comment "A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals." .

schema:recipient a rdf:Property ;
    rdfs:label "recipient" ;
    schema:domainIncludes schema:AuthorizeAction,
        schema:CommunicateAction,
        schema:DonateAction,
        schema:GiveAction,
        schema:Message,
        schema:PayAction,
        schema:ReturnAction,
        schema:SendAction,
        schema:TipAction ;
    schema:rangeIncludes schema:Audience,
        schema:ContactPoint,
        schema:Organization,
        schema:Person ;
    rdfs:comment "A sub property of participant. The participant who is at the receiving end of the action." ;
    rdfs:subPropertyOf schema:participant .

schema:hasPart a rdf:Property ;
    rdfs:label "hasPart" ;
    dct:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex> ;
    schema:domainIncludes schema:CreativeWork ;
    schema:inverseOf schema:isPartOf ;
    schema:rangeIncludes schema:CreativeWork ;
    rdfs:comment "Indicates an item or CreativeWork that is part of this item, or CreativeWork (in some sense)." .

schema:isPartOf a rdf:Property ;
    rdfs:label "isPartOf" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:inverseOf schema:hasPart ;
    schema:rangeIncludes schema:CreativeWork ;
    rdfs:comment "Indicates an item or CreativeWork that this item, or CreativeWork (in some sense), is part of." .

schema:position a rdf:Property ;
    rdfs:label "position" ;
    schema:domainIncludes schema:CreativeWork,
        schema:ListItem ;
    schema:rangeIncludes schema:Integer,
        schema:Text ;
    rdfs:comment "The position of an item in a series or sequence of items." .

schema:instrument a rdf:Property ;
    rdfs:label "instrument" ;
    schema:domainIncludes schema:Action ;
    schema:rangeIncludes schema:Thing ;
    rdfs:comment "The object that helped the agent perform the action. e.g. John wrote a book with <em>a pen</em>." .

schema:object a rdf:Property ;
    rdfs:label "object" ;
    schema:domainIncludes schema:Action ;
    schema:rangeIncludes schema:Thing ;
    rdfs:comment "The object upon which the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn't). e.g. John read <em>a book</em>." .

schema:location a rdf:Property ;
    rdfs:label "location" ;
    schema:domainIncludes schema:Action,
        schema:Event,
        schema:Organization ;
    schema:rangeIncludes schema:Place,
        schema:PostalAddress,
        schema:Text ;
    rdfs:comment "The location of for example where the event is happening, an organization is located, or where an action takes place." .

schema:participant a rdf:Property ;
    rdfs:label "participant" ;
    schema:domainIncludes schema:Action ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    rdfs:comment "Other co-agents that participated in the action indirectly. e.g. John wrote a book with <em>Steve</em>." .

schema:identifier a rdf:Property ;
    rdfs:label "identifier" ;
    schema:domainIncludes schema:Thing ;
    schema:rangeIncludes schema:PropertyValue,
        schema:Text,
        schema:URL ;
    rdfs:comment "The identifier property represents any kind of identifier for any kind of <a class=\"localLink\" href=\"http://schema.org/Thing\">Thing</a>, such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See <a href=\"/docs/datamodel.html#identifierBg\">background notes</a> for more details." ;
    owl:equivalentProperty dct:identifier .


`


module.exports = schemattl