define({ "api": [
  {
    "type": "delete",
    "url": "/clients/",
    "title": "Delete Client information",
    "version": "1.0.0",
    "name": "DeleteClient",
    "group": "Clients",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Client unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Clients deleted.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ClientNotCreated",
            "description": "<p>The client cannot be deleted.</p>"
          }
        ]
      }
    },
    "filename": "routes/clients.js",
    "groupTitle": "Clients"
  },
  {
    "type": "get",
    "url": "/clients/:id",
    "title": "Get specific Client information",
    "version": "1.0.0",
    "name": "GetClient",
    "group": "Clients",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Client unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdClient",
            "description": "<p>Unique id of the client.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdUser",
            "description": "<p>Unique id of the user connected to this client.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "AdresseFecturation",
            "description": "<p>Adress where this client is facturated.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ClientNotFound",
            "description": "<p>The client seeked was not found.</p>"
          }
        ]
      }
    },
    "filename": "routes/clients.js",
    "groupTitle": "Clients"
  },
  {
    "type": "get",
    "url": "/clients/",
    "title": "Get Clients information",
    "version": "1.0.0",
    "name": "GetClients",
    "group": "Clients",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdClient",
            "description": "<p>Unique id of the client.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdUser",
            "description": "<p>Unique id of the user connected to this client.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "AdresseFecturation",
            "description": "<p>Adress where this client is facturated.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ClientsNotAccessible",
            "description": "<p>The table is inaccessible due to server fault.</p>"
          }
        ]
      }
    },
    "filename": "routes/clients.js",
    "groupTitle": "Clients"
  },
  {
    "type": "post",
    "url": "/clients/",
    "title": "Create Client information",
    "version": "1.0.0",
    "name": "PostClient",
    "group": "Clients",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IdClient",
            "description": "<p>Unique id of the client.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IdUser",
            "description": "<p>Unique id of the user connected to this client.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "AdresseFecturation",
            "description": "<p>Adress where this client is facturated.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Clients created.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ClientNotCreated",
            "description": "<p>The client cannot be created.</p>"
          }
        ]
      }
    },
    "filename": "routes/clients.js",
    "groupTitle": "Clients"
  },
  {
    "type": "put",
    "url": "/clients/:id",
    "title": "Update Client information",
    "version": "1.0.0",
    "name": "PutClient",
    "group": "Clients",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Client unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IdClient",
            "description": "<p>Unique id of the client.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IdUser",
            "description": "<p>Unique id of the user connected to this client.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "AdresseFecturation",
            "description": "<p>Adress where this client is facturated.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Clients updated.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ClientNotUpdated",
            "description": "<p>The client cannot be updated.</p>"
          }
        ]
      }
    },
    "filename": "routes/clients.js",
    "groupTitle": "Clients"
  },
  {
    "type": "delete",
    "url": "/commands/:id",
    "title": "Delete Command information",
    "version": "1.0.0",
    "name": "DeleteCommands",
    "group": "Commands",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the command.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Command deleted.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommandsNotDeleted",
            "description": "<p>The command can not be deleted.</p>"
          }
        ]
      }
    },
    "filename": "routes/commands.js",
    "groupTitle": "Commands"
  },
  {
    "type": "get",
    "url": "/commands/",
    "title": "Request Commands information",
    "version": "1.0.0",
    "name": "GetCommands",
    "group": "Commands",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id_restau",
            "description": "<p>Unique id of the restaurant related to this command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id_user",
            "description": "<p>Unique id of the user related to this command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id_deliveryDriver",
            "description": "<p>Unique id of the delivery driver related to this command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "start_datetime",
            "description": "<p>Start date time of the command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "end_datetime",
            "description": "<p>End date time of the command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>List of products inside this command.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Current command status.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommandsNotAccessible",
            "description": "<p>The model is inaccessible due to server fault.</p>"
          }
        ]
      }
    },
    "filename": "routes/commands.js",
    "groupTitle": "Commands"
  },
  {
    "type": "get",
    "url": "/commands/:id",
    "title": "Request specific Command information",
    "version": "1.0.0",
    "name": "GetCommands",
    "group": "Commands",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the command.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id_restau",
            "description": "<p>Unique id of the restaurant related to this command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id_user",
            "description": "<p>Unique id of the user related to this command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id_deliveryDriver",
            "description": "<p>Unique id of the delivery driver related to this command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "start_datetime",
            "description": "<p>Start date time of the command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "end_datetime",
            "description": "<p>End date time of the command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>List of products inside this command.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Current command status.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommandNotFound",
            "description": "<p>The command was not found.</p>"
          }
        ]
      }
    },
    "filename": "routes/commands.js",
    "groupTitle": "Commands"
  },
  {
    "type": "post",
    "url": "/commands/",
    "title": "Create Command information",
    "version": "1.0.0",
    "name": "PostCommands",
    "group": "Commands",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_restau",
            "description": "<p>Unique id of the restaurant related to this command.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_user",
            "description": "<p>Unique id of the user related to this command.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_deliveryDriver",
            "description": "<p>Unique id of the delivery driver related to this command.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "start_datetime",
            "description": "<p>Start date time of the command.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "end_datetime",
            "description": "<p>End date time of the command.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the command.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>List of products inside this command.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Current command status.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Command created.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommandsNotCreated",
            "description": "<p>The command can not be created.</p>"
          }
        ]
      }
    },
    "filename": "routes/commands.js",
    "groupTitle": "Commands"
  },
  {
    "type": "put",
    "url": "/commands/:id",
    "title": "Update Command information",
    "version": "1.0.0",
    "name": "PutCommands",
    "group": "Commands",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the command.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_restau",
            "description": "<p>Unique id of the restaurant related to this command.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_user",
            "description": "<p>Unique id of the user related to this command.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_deliveryDriver",
            "description": "<p>Unique id of the delivery driver related to this command.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "start_datetime",
            "description": "<p>Start date time of the command.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "end_datetime",
            "description": "<p>End date time of the command.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the command.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>List of products inside this command.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Current command status.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Command updated.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommandsNotUpdated",
            "description": "<p>The command can not be updated.</p>"
          }
        ]
      }
    },
    "filename": "routes/commands.js",
    "groupTitle": "Commands"
  },
  {
    "type": "deleted",
    "url": "/components/:id",
    "title": "Delete a Component",
    "version": "1.0.0",
    "name": "DeletedComponent",
    "group": "Component",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the component.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Components deleted.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ComponentNotDeleted",
            "description": "<p>The component cannot be deleted.</p>"
          }
        ]
      }
    },
    "filename": "routes/components.js",
    "groupTitle": "Component"
  },
  {
    "type": "get",
    "url": "/components/:id",
    "title": "Request specific Component information",
    "version": "1.0.0",
    "name": "GetComponent",
    "group": "Component",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Component unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the component.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the component.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the component.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>Link of the component.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "files",
            "description": "<p>Files inside this component.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ComponentNotFound",
            "description": "<p>The component was not found.</p>"
          }
        ]
      }
    },
    "filename": "routes/components.js",
    "groupTitle": "Component"
  },
  {
    "type": "get",
    "url": "/components",
    "title": "Request Components information",
    "version": "1.0.0",
    "name": "GetComponents",
    "group": "Component",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the component.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the component.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the component.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>Link of the component.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "files",
            "description": "<p>Files inside this component.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ComponentNotAccessible",
            "description": "<p>The model is inaccessible due to server fault.</p>"
          }
        ]
      }
    },
    "filename": "routes/components.js",
    "groupTitle": "Component"
  },
  {
    "type": "post",
    "url": "/components/",
    "title": "Create a new Component",
    "version": "1.0.0",
    "name": "PostComponent",
    "group": "Component",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the component.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the component.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>Link of the component.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "files",
            "description": "<p>Files inside this component.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Components created.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ComponentNotCreated",
            "description": "<p>The component cannot be created.</p>"
          }
        ]
      }
    },
    "filename": "routes/components.js",
    "groupTitle": "Component"
  },
  {
    "type": "put",
    "url": "/components/:id",
    "title": "Update a Component",
    "version": "1.0.0",
    "name": "PutComponent",
    "group": "Component",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the component.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the component.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the component.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>Link of the component.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "files",
            "description": "<p>Files inside this component.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Components updated.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ComponentNotUpdated",
            "description": "<p>The component cannot be updated.</p>"
          }
        ]
      }
    },
    "filename": "routes/components.js",
    "groupTitle": "Component"
  },
  {
    "type": "delete",
    "url": "/connectionLogs/:id",
    "title": "Delete Connection Logs information",
    "version": "1.0.0",
    "name": "DeleteConnectionLogs",
    "group": "ConnectionLogs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the log.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>ConnectionLogs deleted.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ConnectionNotDeleted",
            "description": "<p>The log was not deleted.</p>"
          }
        ]
      }
    },
    "filename": "routes/connectionLogs.js",
    "groupTitle": "ConnectionLogs"
  },
  {
    "type": "get",
    "url": "/connectionLogs/",
    "title": "Request Connection Logs information",
    "version": "1.0.0",
    "name": "GetConnectionLogs",
    "group": "ConnectionLogs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdLog",
            "description": "<p>Unique id of the log.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdUser",
            "description": "<p>Unique id of the user related to this log.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Date",
            "description": "<p>Date when the log was saved.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Description",
            "description": "<p>Description of the log.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ConnectionsNotAccessible",
            "description": "<p>The model is inaccessible due to server fault.</p>"
          }
        ]
      }
    },
    "filename": "routes/connectionLogs.js",
    "groupTitle": "ConnectionLogs"
  },
  {
    "type": "get",
    "url": "/connectionLogs/:id",
    "title": "Request Connection Logs information",
    "version": "1.0.0",
    "name": "GetConnectionLogs",
    "group": "ConnectionLogs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the log.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdLog",
            "description": "<p>Unique id of the log.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdUser",
            "description": "<p>Unique id of the user related to this log.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Date",
            "description": "<p>Date when the log was saved.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Description",
            "description": "<p>Description of the log.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ConnectionNotFound",
            "description": "<p>The log was not found.</p>"
          }
        ]
      }
    },
    "filename": "routes/connectionLogs.js",
    "groupTitle": "ConnectionLogs"
  },
  {
    "type": "post",
    "url": "/connectionLogs/",
    "title": "Create Connection Logs information",
    "version": "1.0.0",
    "name": "PostConnectionLogs",
    "group": "ConnectionLogs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IdUser",
            "description": "<p>Unique id of the user related to this log.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "Date",
            "description": "<p>Date when the log was saved.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Description",
            "description": "<p>Description of the log.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>ConnectionLogs created.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ConnectionNotCreated",
            "description": "<p>The log was not created.</p>"
          }
        ]
      }
    },
    "filename": "routes/connectionLogs.js",
    "groupTitle": "ConnectionLogs"
  },
  {
    "type": "put",
    "url": "/connectionLogs/:id",
    "title": "Update Connection Logs information",
    "version": "1.0.0",
    "name": "PutConnectionLogs",
    "group": "ConnectionLogs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the log.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IdUser",
            "description": "<p>Unique id of the user related to this log.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "Date",
            "description": "<p>Date when the log was saved.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Description",
            "description": "<p>Description of the log.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>ConnectionLogs updated.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ConnectionNotUpdated",
            "description": "<p>The log was not updated.</p>"
          }
        ]
      }
    },
    "filename": "routes/connectionLogs.js",
    "groupTitle": "ConnectionLogs"
  },
  {
    "type": "delete",
    "url": "/deliveryDrivers/:id",
    "title": "Delete delivery driver information",
    "version": "1.0.0",
    "name": "DeleteDeliveryDriver",
    "group": "DeliveryDrivers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the delivery driver.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>delivery driver deleted.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DeliveryDriverNotDeleted",
            "description": "<p>The delivery driver was not deleted.</p>"
          }
        ]
      }
    },
    "filename": "routes/deliveryDrivers.js",
    "groupTitle": "DeliveryDrivers"
  },
  {
    "type": "get",
    "url": "/deliveryDrivers/:id",
    "title": "Request specific delivery driver information",
    "version": "1.0.0",
    "name": "GetDeliveryDriver",
    "group": "DeliveryDrivers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IdDeliveryDriver",
            "description": "<p>Unique id of the delivery driver.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdDeliveryDriver",
            "description": "<p>Unique id of the delivery driver.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdUser",
            "description": "<p>Unique id of the user related to this delivery driver.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "AdresseFacturation",
            "description": "<p>Adress of facturation.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "TypeVehicule",
            "description": "<p>Type of vehicule used.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Note",
            "description": "<p>Total votes on this delivery driver.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "NbVotes",
            "description": "<p>Number of votes on this delivery driver.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DeliveryDriverNotFound",
            "description": "<p>The delivery driver wanted was not found.</p>"
          }
        ]
      }
    },
    "filename": "routes/deliveryDrivers.js",
    "groupTitle": "DeliveryDrivers"
  },
  {
    "type": "get",
    "url": "/deliveryDrivers/",
    "title": "Request Delivery Drivers information",
    "version": "1.0.0",
    "name": "GetDeliveryDrivers",
    "group": "DeliveryDrivers",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdDeliveryDriver",
            "description": "<p>Unique id of the delivery driver.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdUser",
            "description": "<p>Unique id of the user related to this delivery driver.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "AdresseFacturation",
            "description": "<p>Adress of facturation.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "TypeVehicule",
            "description": "<p>Type of vehicule used.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Note",
            "description": "<p>Total votes on this delivery driver.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "NbVotes",
            "description": "<p>Number of votes on this delivery driver.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DeliveryDriversNotAccessible",
            "description": "<p>The table is inaccessible due to server fault.</p>"
          }
        ]
      }
    },
    "filename": "routes/deliveryDrivers.js",
    "groupTitle": "DeliveryDrivers"
  },
  {
    "type": "post",
    "url": "/deliveryDrivers/",
    "title": "Create delivery driver information",
    "version": "1.0.0",
    "name": "PostDeliveryDriver",
    "group": "DeliveryDrivers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IdUser",
            "description": "<p>Unique id of the user related to this delivery driver.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "AdresseFacturation",
            "description": "<p>Adress of facturation.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "TypeVehicule",
            "description": "<p>Type of vehicule used.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Note",
            "description": "<p>Total votes on this delivery driver.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "NbVotes",
            "description": "<p>Number of votes on this delivery driver.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Delivery Driver created.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DeliveryDriverNotCreated",
            "description": "<p>The delivery driver was not created.</p>"
          }
        ]
      }
    },
    "filename": "routes/deliveryDrivers.js",
    "groupTitle": "DeliveryDrivers"
  },
  {
    "type": "put",
    "url": "/deliveryDrivers/:id",
    "title": "Update delivery driver information",
    "version": "1.0.0",
    "name": "PutDeliveryDriver",
    "group": "DeliveryDrivers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the delivery driver.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IdUser",
            "description": "<p>Unique id of the user related to this delivery driver.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "AdresseFacturation",
            "description": "<p>Adress of facturation.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "TypeVehicule",
            "description": "<p>Type of vehicule used.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Note",
            "description": "<p>Total votes on this delivery driver.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "NbVotes",
            "description": "<p>Number of votes on this delivery driver.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Delivery Drivers updated.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DeliveryDriverNotUpdated",
            "description": "<p>The delivery driver was not updated.</p>"
          }
        ]
      }
    },
    "filename": "routes/deliveryDrivers.js",
    "groupTitle": "DeliveryDrivers"
  },
  {
    "type": "delete",
    "url": "/downloadLogs/:id",
    "title": "Delete Download Logs information",
    "version": "1.0.0",
    "name": "DeleteDownloadLogs",
    "group": "DownloadLogs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the log.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>DownloadLogs deleted.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DownloadNotDeleted",
            "description": "<p>The log was not deleted.</p>"
          }
        ]
      }
    },
    "filename": "routes/downloadLogs.js",
    "groupTitle": "DownloadLogs"
  },
  {
    "type": "get",
    "url": "/downloadLogs/",
    "title": "Request Download Logs information",
    "version": "1.0.0",
    "name": "GetDownloadLogs",
    "group": "DownloadLogs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdLog",
            "description": "<p>Unique id of the log.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Date",
            "description": "<p>Date at which the log was issued.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Component",
            "description": "<p>'s id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Description",
            "description": "<p>Description of the log.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DownloadsNotAccessible",
            "description": "<p>The table is inaccessible due to server fault.</p>"
          }
        ]
      }
    },
    "filename": "routes/downloadLogs.js",
    "groupTitle": "DownloadLogs"
  },
  {
    "type": "get",
    "url": "/downloadLogs/:id",
    "title": "Request specific Download Logs information",
    "version": "1.0.0",
    "name": "GetDownloadLogs",
    "group": "DownloadLogs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the log.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdLog",
            "description": "<p>Unique id of the log.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Date",
            "description": "<p>Date at which the log was issued.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Component",
            "description": "<p>'s id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Description",
            "description": "<p>Description of the log.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DownloadNotFound",
            "description": "<p>The log was not found.</p>"
          }
        ]
      }
    },
    "filename": "routes/downloadLogs.js",
    "groupTitle": "DownloadLogs"
  },
  {
    "type": "post",
    "url": "/downloadLogs/",
    "title": "Create Download Logs information",
    "version": "1.0.0",
    "name": "PostDownloadLogs",
    "group": "DownloadLogs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Component",
            "description": "<p>'s id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Description",
            "description": "<p>Description of the log.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>DownloadLogs created.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DownloadNotCreated",
            "description": "<p>The log was not created.</p>"
          }
        ]
      }
    },
    "filename": "routes/downloadLogs.js",
    "groupTitle": "DownloadLogs"
  },
  {
    "type": "put",
    "url": "/downloadLogs/:id",
    "title": "Update Download Logs information",
    "version": "1.0.0",
    "name": "PutDownloadLogs",
    "group": "DownloadLogs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IdLog",
            "description": "<p>Unique id of the log.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Component",
            "description": "<p>'s id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Description",
            "description": "<p>Description of the log.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>DownloadLogs updated.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DownloadNotUpdated",
            "description": "<p>The log was not updated.</p>"
          }
        ]
      }
    },
    "filename": "routes/downloadLogs.js",
    "groupTitle": "DownloadLogs"
  },
  {
    "type": "delete",
    "url": "/menus/:id",
    "title": "Delete Menu information",
    "version": "1.0.0",
    "name": "DeleteMenus",
    "group": "Menus",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Menu's unique id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Menus deleted.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MenuNotDeleted",
            "description": "<p>The menu cannot be deleted.</p>"
          }
        ]
      }
    },
    "filename": "routes/menus.js",
    "groupTitle": "Menus"
  },
  {
    "type": "get",
    "url": "/menus/:id",
    "title": "Recover specific Menu information",
    "version": "1.0.0",
    "name": "GetMenu",
    "group": "Menus",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Menu's unique id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Menu's unique id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id_restau",
            "description": "<p>Restaurant's id related to this menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of this menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Menu's price.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Menu's description.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>List of products inside this menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "pictures",
            "description": "<p>List of pictures for this menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "notes",
            "description": "<p>Total of every notes on this menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "notes_number",
            "description": "<p>Number of notes for this menu.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MenuNotFound",
            "description": "<p>The wanted menu was not found.</p>"
          }
        ]
      }
    },
    "filename": "routes/menus.js",
    "groupTitle": "Menus"
  },
  {
    "type": "get",
    "url": "/menus/",
    "title": "Recover Menus information",
    "version": "1.0.0",
    "name": "GetMenus",
    "group": "Menus",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Menu's unique id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id_restau",
            "description": "<p>Restaurant's id related to this menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of this menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Menu's price.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Menu's description.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>List of products inside this menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "pictures",
            "description": "<p>List of pictures for this menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "notes",
            "description": "<p>Total of every notes on this menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "notes_number",
            "description": "<p>Number of notes for this menu.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MenusNotAccessible",
            "description": "<p>The model is inaccessible due to server fault.</p>"
          }
        ]
      }
    },
    "filename": "routes/menus.js",
    "groupTitle": "Menus"
  },
  {
    "type": "post",
    "url": "/menus/",
    "title": "Create Menu information",
    "version": "1.0.0",
    "name": "PostMenus",
    "group": "Menus",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_restau",
            "description": "<p>Restaurant's id related to this menu.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of this menu.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Menu's price.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Menu's description.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>List of products inside this menu.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "pictures",
            "description": "<p>List of pictures for this menu.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "notes",
            "description": "<p>Total of every notes on this menu.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "notes_number",
            "description": "<p>Number of notes for this menu.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Menus added.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MenuNotCreated",
            "description": "<p>The menu cannot be created.</p>"
          }
        ]
      }
    },
    "filename": "routes/menus.js",
    "groupTitle": "Menus"
  },
  {
    "type": "put",
    "url": "/menus/:id",
    "title": "Update Menu information",
    "version": "1.0.0",
    "name": "PutMenus",
    "group": "Menus",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Menu's unique id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_restau",
            "description": "<p>Restaurant's id related to this menu.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of this menu.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Menu's price.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Menu's description.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>List of products inside this menu.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "pictures",
            "description": "<p>List of pictures for this menu.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "notes",
            "description": "<p>Total of every notes on this menu.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "notes_number",
            "description": "<p>Number of notes for this menu.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Menus updated.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MenuNotUpdated",
            "description": "<p>The menu cannot be updated.</p>"
          }
        ]
      }
    },
    "filename": "routes/menus.js",
    "groupTitle": "Menus"
  },
  {
    "type": "delete",
    "url": "/products/:id",
    "title": "Delete Product Information",
    "version": "1.0.0",
    "name": "DeleteProducts",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Product's unique id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Products deleted.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProductNotDeleted",
            "description": "<p>The product cannot be deleted.</p>"
          }
        ]
      }
    },
    "filename": "routes/products.js",
    "groupTitle": "Products"
  },
  {
    "type": "get",
    "url": "/products/:id",
    "title": "Recover specific Product Information",
    "version": "1.0.0",
    "name": "GetProduct",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Product's unique id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Product's unique id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id_restau",
            "description": "<p>Restaurants's id related to this product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of this product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of this product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "pictures",
            "description": "<p>Pictures of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "sizes",
            "description": "<p>Sizes available for this product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "notes",
            "description": "<p>Notes of this product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "notes_number",
            "description": "<p>Number of notes.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProductNotFound",
            "description": "<p>The products was not found.</p>"
          }
        ]
      }
    },
    "filename": "routes/products.js",
    "groupTitle": "Products"
  },
  {
    "type": "get",
    "url": "/products/",
    "title": "Recover Products Information",
    "version": "1.0.0",
    "name": "GetProducts",
    "group": "Products",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Product's unique id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id_restau",
            "description": "<p>Restaurants's id related to this product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of this product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of this product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "pictures",
            "description": "<p>Pictures of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "sizes",
            "description": "<p>Sizes available for this product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "notes",
            "description": "<p>Notes of this product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "notes_number",
            "description": "<p>Number of notes.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProductsNotAccessible",
            "description": "<p>The table is inaccessible due to server fault.</p>"
          }
        ]
      }
    },
    "filename": "routes/products.js",
    "groupTitle": "Products"
  },
  {
    "type": "post",
    "url": "/products/",
    "title": "Create Product Information",
    "version": "1.0.0",
    "name": "PostProducts",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_restau",
            "description": "<p>Restaurants's id related to this product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of this product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of this product.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "pictures",
            "description": "<p>Pictures of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "sizes",
            "description": "<p>Sizes available for this product.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "notes",
            "description": "<p>Notes of this product.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "notes_number",
            "description": "<p>Number of notes.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Products added.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProductNotCreated",
            "description": "<p>The product cannot be created.</p>"
          }
        ]
      }
    },
    "filename": "routes/products.js",
    "groupTitle": "Products"
  },
  {
    "type": "put",
    "url": "/products/:id",
    "title": "Update Product Information",
    "version": "1.0.0",
    "name": "PutProducts",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Product's unique id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_restau",
            "description": "<p>Restaurants's id related to this product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of this product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of this product.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "pictures",
            "description": "<p>Pictures of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "sizes",
            "description": "<p>Sizes available for this product.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "notes",
            "description": "<p>Notes of this product.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "notes_number",
            "description": "<p>Number of notes.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Products updated.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProductNotUpdated",
            "description": "<p>The product cannot be updated.</p>"
          }
        ]
      }
    },
    "filename": "routes/products.js",
    "groupTitle": "Products"
  },
  {
    "type": "delete",
    "url": "/restaurants/:id",
    "title": "Delete Restaurant Information",
    "version": "1.0.0",
    "name": "DeleteRestaurants",
    "group": "Restaurants",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IdRestaurant",
            "description": "<p>Restaurant's unique id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Restaurants deleted.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RestaurantNotDeleted",
            "description": "<p>The restaurant was not deleted.</p>"
          }
        ]
      }
    },
    "filename": "routes/restaurants.js",
    "groupTitle": "Restaurants"
  },
  {
    "type": "get",
    "url": "/restaurants/:id",
    "title": "Get specific Restaurant Information",
    "version": "1.0.0",
    "name": "GetRestaurant",
    "group": "Restaurants",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IdRestaurant",
            "description": "<p>Restaurant's unique id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdRestaurant",
            "description": "<p>Restaurant's unique id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "idUser",
            "description": "<p>User's id related to this restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nom",
            "description": "<p>Name of this restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "AdresseRestaurant",
            "description": "<p>Address of this restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image_banniere",
            "description": "<p>Pictures of the restaurant.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RestaurantNotFound",
            "description": "<p>The wanted restaurant cannot be found.</p>"
          }
        ]
      }
    },
    "filename": "routes/restaurants.js",
    "groupTitle": "Restaurants"
  },
  {
    "type": "get",
    "url": "/restaurants/",
    "title": "Get Restaurants Information",
    "version": "1.0.0",
    "name": "GetRestaurants",
    "group": "Restaurants",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdRestaurant",
            "description": "<p>Restaurant's unique id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "idUser",
            "description": "<p>User's id related to this restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nom",
            "description": "<p>Name of this restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "AdresseRestaurant",
            "description": "<p>Address of this restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image_banniere",
            "description": "<p>Pictures of the restaurant.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RestaurantsNotAccessible",
            "description": "<p>The table is inaccessible due to server fault.</p>"
          }
        ]
      }
    },
    "filename": "routes/restaurants.js",
    "groupTitle": "Restaurants"
  },
  {
    "type": "post",
    "url": "/restaurants/",
    "title": "Create Restaurant Information",
    "version": "1.0.0",
    "name": "PostRestaurants",
    "group": "Restaurants",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IdRestaurant",
            "description": "<p>Restaurant's unique id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idUser",
            "description": "<p>User's id related to this restaurant.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Nom",
            "description": "<p>Name of this restaurant.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "AdresseRestaurant",
            "description": "<p>Address of this restaurant.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image_banniere",
            "description": "<p>Pictures of the restaurant.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Restaurants created.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RestaurantNotCreated",
            "description": "<p>The restaurant was not created.</p>"
          }
        ]
      }
    },
    "filename": "routes/restaurants.js",
    "groupTitle": "Restaurants"
  },
  {
    "type": "put",
    "url": "/restaurants/:id",
    "title": "Update Restaurant Information",
    "version": "1.0.0",
    "name": "PutRestaurants",
    "group": "Restaurants",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IdRestaurant",
            "description": "<p>Restaurant's unique id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idUser",
            "description": "<p>User's id related to this restaurant.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Nom",
            "description": "<p>Name of this restaurant.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "AdresseRestaurant",
            "description": "<p>Address of this restaurant.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image_banniere",
            "description": "<p>Pictures of the restaurant.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Restaurants updated.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RestaurantNotUpdated",
            "description": "<p>The restaurant was not updated.</p>"
          }
        ]
      }
    },
    "filename": "routes/restaurants.js",
    "groupTitle": "Restaurants"
  },
  {
    "type": "delete",
    "url": "/users/",
    "title": "Delete Users information",
    "version": "1.0.0",
    "name": "DeleteUsers",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IdUser",
            "description": "<p>Unique id of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Users deleted.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotDeleted",
            "description": "<p>The user cannot be deleted.</p>"
          }
        ]
      }
    },
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/",
    "title": "Recover specific Users information",
    "version": "1.0.0",
    "name": "GetUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User's unique id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdUser",
            "description": "<p>Unique id of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nom",
            "description": "<p>User's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Prenom",
            "description": "<p>User's firstname.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>Email of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "MotDePasse",
            "description": "<p>User's password.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "DateDeNaissance",
            "description": "<p>Birthdate of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Adresse",
            "description": "<p>User's address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "DateInscription",
            "description": "<p>Date when the user create its account.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CodeParainage",
            "description": "<p>Unique code that permits the user to patron someone.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "NbParainages",
            "description": "<p>Number of patronage.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "UserFlag",
            "description": "<p>Type of user.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The wanted user was not found.</p>"
          }
        ]
      }
    },
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/",
    "title": "Recover Users information",
    "version": "1.0.0",
    "name": "GetUsers",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdUser",
            "description": "<p>Unique id of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nom",
            "description": "<p>User's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Prenom",
            "description": "<p>User's firstname.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>Email of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "MotDePasse",
            "description": "<p>User's password.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "DateDeNaissance",
            "description": "<p>Birthdate of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Adresse",
            "description": "<p>User's address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "DateInscription",
            "description": "<p>Date when the user create its account.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CodeParainage",
            "description": "<p>Unique code that permits the user to patron someone.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "NbParainages",
            "description": "<p>Number of patronage.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "UserFlag",
            "description": "<p>Type of user.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UsersNotAccessible",
            "description": "<p>The table is inaccessible due to server fault.</p>"
          }
        ]
      }
    },
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/",
    "title": "Create Users information",
    "version": "1.0.0",
    "name": "PostUsers",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Nom",
            "description": "<p>User's name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Prenom",
            "description": "<p>User's firstname.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>Email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "MotDePasse",
            "description": "<p>User's password.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "DateDeNaissance",
            "description": "<p>Birthdate of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Adresse",
            "description": "<p>User's address.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "DateInscription",
            "description": "<p>Date when the user create its account.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CodeParainage",
            "description": "<p>Unique code that permits the user to patron someone.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "NbParainages",
            "description": "<p>Number of patronage.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserFlag",
            "description": "<p>Type of user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Users created.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotCreated",
            "description": "<p>The user cannot be created.</p>"
          }
        ]
      }
    },
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/users/",
    "title": "Update Users information",
    "version": "1.0.0",
    "name": "PutUsers",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IdUser",
            "description": "<p>Unique id of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Nom",
            "description": "<p>User's name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Prenom",
            "description": "<p>User's firstname.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>Email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "MotDePasse",
            "description": "<p>User's password.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "DateDeNaissance",
            "description": "<p>Birthdate of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Adresse",
            "description": "<p>User's address.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "DateInscription",
            "description": "<p>Date when the user create its account.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CodeParainage",
            "description": "<p>Unique code that permits the user to patron someone.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "NbParainages",
            "description": "<p>Number of patronage.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserFlag",
            "description": "<p>Type of user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Users updated.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotUpdated",
            "description": "<p>The user cannot be updated.</p>"
          }
        ]
      }
    },
    "filename": "routes/users.js",
    "groupTitle": "Users"
  }
] });
