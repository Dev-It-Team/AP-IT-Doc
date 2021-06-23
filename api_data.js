define({ "api": [
  {
    "type": "delete",
    "url": "/clients/",
    "title": "Delete Client information",
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
    "version": "0.0.0",
    "filename": "routes/clients.js",
    "groupTitle": "Clients"
  },
  {
    "type": "get",
    "url": "/clients/:id",
    "title": "Get specific Client information",
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
    "version": "0.0.0",
    "filename": "routes/clients.js",
    "groupTitle": "Clients"
  },
  {
    "type": "get",
    "url": "/clients/",
    "title": "Get Clients information",
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
    "version": "0.0.0",
    "filename": "routes/clients.js",
    "groupTitle": "Clients"
  },
  {
    "type": "post",
    "url": "/clients/",
    "title": "Create Client information",
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
    "version": "0.0.0",
    "filename": "routes/clients.js",
    "groupTitle": "Clients"
  },
  {
    "type": "put",
    "url": "/clients/:id",
    "title": "Update Client information",
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
    "version": "0.0.0",
    "filename": "routes/clients.js",
    "groupTitle": "Clients"
  },
  {
    "type": "delete",
    "url": "/commands/:id",
    "title": "Delete Command information",
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
    "version": "0.0.0",
    "filename": "routes/commands.js",
    "groupTitle": "Commands"
  },
  {
    "type": "get",
    "url": "/commands/",
    "title": "Request Commands information",
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
    "version": "0.0.0",
    "filename": "routes/commands.js",
    "groupTitle": "Commands"
  },
  {
    "type": "get",
    "url": "/commands/:id",
    "title": "Request specific Command information",
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
    "version": "0.0.0",
    "filename": "routes/commands.js",
    "groupTitle": "Commands"
  },
  {
    "type": "post",
    "url": "/commands/",
    "title": "Create Command information",
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
    "version": "0.0.0",
    "filename": "routes/commands.js",
    "groupTitle": "Commands"
  },
  {
    "type": "put",
    "url": "/commands/:id",
    "title": "Update Command information",
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
    "version": "0.0.0",
    "filename": "routes/commands.js",
    "groupTitle": "Commands"
  },
  {
    "type": "deleted",
    "url": "/components/:id",
    "title": "Delete a Component",
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
    "version": "0.0.0",
    "filename": "routes/components.js",
    "groupTitle": "Component"
  },
  {
    "type": "get",
    "url": "/components/:id",
    "title": "Request specific Component information",
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
    "version": "0.0.0",
    "filename": "routes/components.js",
    "groupTitle": "Component"
  },
  {
    "type": "get",
    "url": "/components",
    "title": "Request Components information",
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
    "version": "0.0.0",
    "filename": "routes/components.js",
    "groupTitle": "Component"
  },
  {
    "type": "post",
    "url": "/components/",
    "title": "Create a new Component",
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
    "version": "0.0.0",
    "filename": "routes/components.js",
    "groupTitle": "Component"
  },
  {
    "type": "put",
    "url": "/components/:id",
    "title": "Update a Component",
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
    "version": "0.0.0",
    "filename": "routes/components.js",
    "groupTitle": "Component"
  },
  {
    "type": "delete",
    "url": "/connectionLogs/:id",
    "title": "Delete Connection Logs information",
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
    "version": "0.0.0",
    "filename": "routes/connectionLogs.js",
    "groupTitle": "ConnectionLogs"
  },
  {
    "type": "get",
    "url": "/connectionLogs/",
    "title": "Request Connection Logs information",
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
    "version": "0.0.0",
    "filename": "routes/connectionLogs.js",
    "groupTitle": "ConnectionLogs"
  },
  {
    "type": "get",
    "url": "/connectionLogs/:id",
    "title": "Request Connection Logs information",
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
    "version": "0.0.0",
    "filename": "routes/connectionLogs.js",
    "groupTitle": "ConnectionLogs"
  },
  {
    "type": "post",
    "url": "/connectionLogs/",
    "title": "Create Connection Logs information",
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
    "version": "0.0.0",
    "filename": "routes/connectionLogs.js",
    "groupTitle": "ConnectionLogs"
  },
  {
    "type": "put",
    "url": "/connectionLogs/:id",
    "title": "Update Connection Logs information",
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
    "version": "0.0.0",
    "filename": "routes/connectionLogs.js",
    "groupTitle": "ConnectionLogs"
  },
  {
    "type": "delete",
    "url": "/deliveryDrivers/:id",
    "title": "Delete delivery driver information",
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
    "version": "0.0.0",
    "filename": "routes/deliveryDrivers.js",
    "groupTitle": "DeliveryDrivers"
  },
  {
    "type": "get",
    "url": "/deliveryDrivers/:id",
    "title": "Request specific delivery driver information",
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
    "version": "0.0.0",
    "filename": "routes/deliveryDrivers.js",
    "groupTitle": "DeliveryDrivers"
  },
  {
    "type": "get",
    "url": "/deliveryDrivers/",
    "title": "Request Delivery Drivers information",
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
    "version": "0.0.0",
    "filename": "routes/deliveryDrivers.js",
    "groupTitle": "DeliveryDrivers"
  },
  {
    "type": "post",
    "url": "/deliveryDrivers/",
    "title": "Create delivery driver information",
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
    "version": "0.0.0",
    "filename": "routes/deliveryDrivers.js",
    "groupTitle": "DeliveryDrivers"
  },
  {
    "type": "put",
    "url": "/deliveryDrivers/:id",
    "title": "Update delivery driver information",
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
    "version": "0.0.0",
    "filename": "routes/deliveryDrivers.js",
    "groupTitle": "DeliveryDrivers"
  },
  {
    "type": "delete",
    "url": "/downloadLogs/:id",
    "title": "Delete Download Logs information",
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
    "version": "0.0.0",
    "filename": "routes/downloadLogs.js",
    "groupTitle": "DownloadLogs"
  },
  {
    "type": "get",
    "url": "/downloadLogs/",
    "title": "Request Download Logs information",
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
            "description": "<p>The model is inaccessible due to server fault.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/downloadLogs.js",
    "groupTitle": "DownloadLogs"
  },
  {
    "type": "get",
    "url": "/downloadLogs/:id",
    "title": "Request Download Logs information",
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
    "version": "0.0.0",
    "filename": "routes/downloadLogs.js",
    "groupTitle": "DownloadLogs"
  },
  {
    "type": "post",
    "url": "/downloadLogs/",
    "title": "Create Download Logs information",
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
    "version": "0.0.0",
    "filename": "routes/downloadLogs.js",
    "groupTitle": "DownloadLogs"
  },
  {
    "type": "put",
    "url": "/downloadLogs/:id",
    "title": "Update Download Logs information",
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
    "version": "0.0.0",
    "filename": "routes/downloadLogs.js",
    "groupTitle": "DownloadLogs"
  }
] });