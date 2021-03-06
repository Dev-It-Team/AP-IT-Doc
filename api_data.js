define({ "api": [
  {
    "type": "delete",
    "url": "/orders/:id",
    "title": "Delete Commands information",
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
            "description": "<p>Unique id of the order.</p>"
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
            "description": "<p>Commands deleted.</p>"
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
            "description": "<p>The order can not be deleted.</p>"
          }
        ]
      }
    },
    "filename": "routes/users/orders.js",
    "groupTitle": "Commands"
  },
  {
    "type": "get",
    "url": "/orders/:id",
    "title": "Request specific Commands information",
    "version": "1.0.0",
    "name": "GetCommand",
    "group": "Commands",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the order.</p>"
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
            "description": "<p>Unique id of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id_restau",
            "description": "<p>Unique id of the restaurant related to this order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id_user",
            "description": "<p>Unique id of the user related to this order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id_deliver",
            "description": "<p>Unique id of the delivery driver related to this order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "start_datetime",
            "description": "<p>Start date time of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "end_datetime",
            "description": "<p>End date time of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "prices",
            "description": "<p>Price of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>List of products inside this order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Current order status.</p>"
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
            "description": "<p>The order was not found.</p>"
          }
        ]
      }
    },
    "filename": "routes/users/orders.js",
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
            "description": "<p>Unique id of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id_restau",
            "description": "<p>Unique id of the restaurant related to this order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id_user",
            "description": "<p>Unique id of the user related to this order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id_deliver",
            "description": "<p>Unique id of the delivery driver related to this order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "start_datetime",
            "description": "<p>Start date time of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "end_datetime",
            "description": "<p>End date time of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "prices",
            "description": "<p>Price of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>List of products inside this order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Current order status.</p>"
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
    "filename": "routes/users/orders.js",
    "groupTitle": "Commands"
  },
  {
    "type": "post",
    "url": "/orders/",
    "title": "Create Commands information",
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
            "description": "<p>Unique id of the restaurant related to this order.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_user",
            "description": "<p>Unique id of the user related to this order.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_deliver",
            "description": "<p>Unique id of the delivery driver related to this order.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "start_datetime",
            "description": "<p>Start date time of the order.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "end_datetime",
            "description": "<p>End date time of the order.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "prices",
            "description": "<p>Price of the order.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>List of products inside this order.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Current order status.</p>"
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
            "description": "<p>Commands created.</p>"
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
            "description": "<p>The order can not be created.</p>"
          }
        ]
      }
    },
    "filename": "routes/users/orders.js",
    "groupTitle": "Commands"
  },
  {
    "type": "put",
    "url": "/orders/:id",
    "title": "Update Commands information",
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
            "description": "<p>Unique id of the order.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_restau",
            "description": "<p>Unique id of the restaurant related to this order.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_user",
            "description": "<p>Unique id of the user related to this order.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_deliver",
            "description": "<p>Unique id of the delivery driver related to this order.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "start_datetime",
            "description": "<p>Start date time of the order.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "end_datetime",
            "description": "<p>End date time of the order.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "prices",
            "description": "<p>Price of the order.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>List of products inside this order.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Current order status.</p>"
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
            "description": "<p>Commands updated.</p>"
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
            "description": "<p>The order can not be updated.</p>"
          }
        ]
      }
    },
    "filename": "routes/users/orders.js",
    "groupTitle": "Commands"
  },
  {
    "type": "deleted",
    "url": "/components/:id",
    "title": "Delete a Component",
    "version": "1.1.0",
    "name": "DeletedComponent",
    "group": "Component",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "IdComponent",
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
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ComponentNotExisting",
            "description": "<p>The component does not exists.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Database issues.</p>"
          }
        ]
      }
    },
    "filename": "routes/components.js",
    "groupTitle": "Component"
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
    "version": "1.1.0",
    "name": "GetComponent",
    "group": "Component",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
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
            "type": "String",
            "optional": false,
            "field": "IdComponent",
            "description": "<p>id of the component.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Name of the component.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Description",
            "description": "<p>Description of the component.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Link",
            "description": "<p>Link of the component.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Files",
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
    "version": "1.1.0",
    "name": "GetComponents",
    "group": "Component",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "IdComponent",
            "description": "<p>id of the component.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Name of the component.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Description",
            "description": "<p>Description of the component.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Link",
            "description": "<p>Link of the component.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Files",
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
    "version": "1.1.0",
    "name": "PostComponent",
    "group": "Component",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Name of the component.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Description",
            "description": "<p>Description of the component.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Link",
            "description": "<p>Link of the component.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "Files",
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
            "description": "<p>Component created.</p>"
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
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DuplicateComponent",
            "description": "<p>Already existinc component.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Database issues.</p>"
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
    "version": "1.1.0",
    "name": "PutComponent",
    "group": "Component",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "IdComponent",
            "description": "<p>id of the component.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Name of the component.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Description",
            "description": "<p>Description of the component.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Link",
            "description": "<p>Link of the component.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "Files",
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
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ComponentNotExisting",
            "description": "<p>The component does not exists.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Database issues.</p>"
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
    "url": "/deliveryDrivers/:id",
    "title": "Delete delivery driver information",
    "version": "1.1.0",
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
    "url": "/deliveryDrivers/users/:IdUser",
    "title": "Request specific delivery driver information",
    "version": "1.1.0",
    "name": "GetDeliveryDriver",
    "group": "DeliveryDrivers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IdUser",
            "description": "<p>Unique id of the user related.</p>"
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
            "field": "VehiculeType",
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
            "field": "VoteNb",
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
    "version": "1.1.0",
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
            "field": "VehiculeType",
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
            "field": "VoteNb",
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
    "version": "1.1.0",
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
            "field": "VehiculeType",
            "description": "<p>Type of vehicule used.</p>"
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
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DuplicateDeliveryDriver",
            "description": "<p>The delivery driver is already created.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Database issues.</p>"
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
    "version": "1.1.0",
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
    "type": "put",
    "url": "/deliveryDrivers/:id",
    "title": "Update delivery driver information",
    "version": "1.1.0",
    "name": "PutDeliveryDriver",
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
            "field": "VehiculeType",
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
            "field": "VoteNb",
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
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DeliveryDriverNotFound",
            "description": "<p>The delivery driver does not exists.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Database issues.</p>"
          }
        ]
      }
    },
    "filename": "routes/deliveryDrivers.js",
    "groupTitle": "DeliveryDrivers"
  },
  {
    "type": "delete",
    "url": "/users/:IdUser/logs/:id",
    "title": "Delete Connection Logs information",
    "version": "1.1.0",
    "name": "DeleteConnectionLogs",
    "group": "LogsConnection",
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
            "description": "<p>LogsConnection deleted.</p>"
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
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LogsNotExisting",
            "description": "<p>The log does not exists.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Database issues.</p>"
          }
        ]
      }
    },
    "filename": "routes/logsConnection.js",
    "groupTitle": "LogsConnection"
  },
  {
    "type": "delete",
    "url": "/connectionLogs/:id",
    "title": "Delete Connection Logs information",
    "version": "1.0.0",
    "name": "DeleteConnectionLogs",
    "group": "LogsConnection",
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
            "description": "<p>LogsConnection deleted.</p>"
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
    "filename": "routes/logsConnection.js",
    "groupTitle": "LogsConnection"
  },
  {
    "type": "get",
    "url": "/users/:IdUser/logs/",
    "title": "Request Connection Logs information",
    "version": "1.1.0",
    "name": "GetConnectionLogs",
    "group": "LogsConnection",
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
            "field": "ConnectionNotAccessible",
            "description": "<p>The database is inaccessible due to server fault.</p>"
          }
        ]
      }
    },
    "filename": "routes/logsConnection.js",
    "groupTitle": "LogsConnection"
  },
  {
    "type": "get",
    "url": "/users/:IdUser/logs/:id",
    "title": "Request Connection Logs information",
    "version": "1.1.0",
    "name": "GetConnectionLogs",
    "group": "LogsConnection",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IdLog",
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
    "filename": "routes/logsConnection.js",
    "groupTitle": "LogsConnection"
  },
  {
    "type": "get",
    "url": "/connectionLogs/",
    "title": "Request Connection Logs information",
    "version": "1.0.0",
    "name": "GetConnectionLogs",
    "group": "LogsConnection",
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
    "filename": "routes/logsConnection.js",
    "groupTitle": "LogsConnection"
  },
  {
    "type": "get",
    "url": "/connectionLogs/:id",
    "title": "Request Connection Logs information",
    "version": "1.0.0",
    "name": "GetConnectionLogs",
    "group": "LogsConnection",
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
    "filename": "routes/logsConnection.js",
    "groupTitle": "LogsConnection"
  },
  {
    "type": "post",
    "url": "/users/:IdUser/logs/",
    "title": "Create Connection Logs information",
    "version": "1.1.0",
    "name": "PostConnectionLogs",
    "group": "LogsConnection",
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
            "description": "<p>LogsConnection created.</p>"
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
    "filename": "routes/logsConnection.js",
    "groupTitle": "LogsConnection"
  },
  {
    "type": "post",
    "url": "/users/:IdUser/logs/",
    "title": "Create Connection Logs information",
    "version": "1.1.0",
    "name": "PostConnectionLogs",
    "group": "LogsConnection",
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
            "description": "<p>LogsConnection created.</p>"
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
    "filename": "routes/uploadFiles.js",
    "groupTitle": "LogsConnection"
  },
  {
    "type": "post",
    "url": "/connectionLogs/",
    "title": "Create Connection Logs information",
    "version": "1.0.0",
    "name": "PostConnectionLogs",
    "group": "LogsConnection",
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
            "description": "<p>LogsConnection created.</p>"
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
    "filename": "routes/logsConnection.js",
    "groupTitle": "LogsConnection"
  },
  {
    "type": "delete",
    "url": "/components/:IdComponent/downloadLogs/:id",
    "title": "Delete Download Logs information",
    "version": "1.1.0",
    "name": "DeleteDownloadLogs",
    "group": "LogsDownload",
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
            "description": "<p>LogsDownload deleted.</p>"
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
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LogsNotExisting",
            "description": "<p>The log does not exists.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Database issues.</p>"
          }
        ]
      }
    },
    "filename": "routes/logsDownload.js",
    "groupTitle": "LogsDownload"
  },
  {
    "type": "get",
    "url": "/components/:IdComponent/logs",
    "title": "Request Download Logs information",
    "version": "1.1.0",
    "name": "GetDownloadLogs",
    "group": "LogsDownload",
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
            "field": "ComponentId",
            "description": "<p>Component's id.</p>"
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
    "filename": "routes/logsDownload.js",
    "groupTitle": "LogsDownload"
  },
  {
    "type": "get",
    "url": "/components/:IdComponent/downloadLogs/:id",
    "title": "Request specific Download Logs information",
    "version": "1.1.0",
    "name": "GetDownloadLogs",
    "group": "LogsDownload",
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
            "field": "IdComponent",
            "description": "<p>Component's id.</p>"
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
            "field": "DownloadLogNotFound",
            "description": "<p>The log was not found.</p>"
          }
        ]
      }
    },
    "filename": "routes/logsDownload.js",
    "groupTitle": "LogsDownload"
  },
  {
    "type": "post",
    "url": "/components/:IdComponent/downloadLogs/",
    "title": "Create Download Logs information",
    "version": "1.1.0",
    "name": "PostDownloadLogs",
    "group": "LogsDownload",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IdComponent",
            "description": "<p>Component's id.</p>"
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
            "description": "<p>LogsDownload created.</p>"
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
    "filename": "routes/logsDownload.js",
    "groupTitle": "LogsDownload"
  },
  {
    "type": "delete",
    "url": "/restaurants/:IdRestaurant/menus/:id",
    "title": "Delete Menu information",
    "version": "1.1.0",
    "name": "DeleteMenus",
    "group": "Menus",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "IdMenu",
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
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MenuNotExisting",
            "description": "<p>The menu wanted does not exists.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Database issues.</p>"
          }
        ]
      }
    },
    "filename": "routes/restaurants/menus.js",
    "groupTitle": "Menus"
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
    "filename": "routes/restaurants/menus.js",
    "groupTitle": "Menus"
  },
  {
    "type": "get",
    "url": "/restaurants/:IdRestaurant/menus/:id",
    "title": "Recover specific Menu information",
    "version": "1.1.0",
    "name": "GetMenu",
    "group": "Menus",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IdMenu",
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
            "field": "_id",
            "description": "<p>Menu's unique id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdRestaurant",
            "description": "<p>Restaurant's id related to this menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Name of this menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Description",
            "description": "<p>Menu's description.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Products",
            "description": "<p>List of products inside this menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Picture",
            "description": "<p>List of pictures for this menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Price",
            "description": "<p>Menu's price.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Notes",
            "description": "<p>Total of every notes on this menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "VoteNb",
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
    "filename": "routes/restaurants/menus.js",
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
    "filename": "routes/restaurants/menus.js",
    "groupTitle": "Menus"
  },
  {
    "type": "get",
    "url": "/restaurants/:IdRestaurant/menus/",
    "title": "Recover Menus information",
    "version": "1.1.0",
    "name": "GetMenus",
    "group": "Menus",
    "description": "<p>Returns an array of menus.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>Menu's unique id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdRestaurant",
            "description": "<p>Restaurant's id related to this menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Name of this menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Description",
            "description": "<p>Menu's description.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Products",
            "description": "<p>List of products inside this menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Picture",
            "description": "<p>Picture for this menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Price",
            "description": "<p>Menu's price.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Notes",
            "description": "<p>Total of every notes on this menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "VoteNb",
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
    "filename": "routes/restaurants/menus.js",
    "groupTitle": "Menus"
  },
  {
    "type": "get",
    "url": "/menus/",
    "title": "Recover Menus information",
    "version": "1.0.0",
    "name": "GetMenus",
    "group": "Menus",
    "description": "<p>Returns an array of menus.</p>",
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
    "filename": "routes/restaurants/menus.js",
    "groupTitle": "Menus"
  },
  {
    "type": "post",
    "url": "/restaurants/:IdRestaurant/menus/",
    "title": "Create Menu information",
    "version": "1.1.0",
    "name": "PostMenus",
    "group": "Menus",
    "description": "<p>Create a new menu, please not that you can't create two menus in the same restaurant with the same name.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IdRestaurant",
            "description": "<p>Restaurant's id related to this menu.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Name of this menu.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Description",
            "description": "<p>Menu's description.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "Products",
            "description": "<p>List of products inside this menu.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Picture",
            "description": "<p>List of pictures for this menu.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Price",
            "description": "<p>Menu's price.</p>"
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
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DuplicateMenu",
            "description": "<p>The menu created already exists.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Database issues.</p>"
          }
        ]
      }
    },
    "filename": "routes/restaurants/menus.js",
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
    "filename": "routes/restaurants/menus.js",
    "groupTitle": "Menus"
  },
  {
    "type": "put",
    "url": "/restaurants/:IdRestaurant/menus/:id",
    "title": "Update Menu information",
    "version": "1.1.0",
    "name": "PutMenus",
    "group": "Menus",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "IdMenu",
            "description": "<p>Menu's unique id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IdRestaurant",
            "description": "<p>Restaurant's id related to this menu.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Name of this menu.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Description",
            "description": "<p>Menu's description.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "Products",
            "description": "<p>List of products inside this menu.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Picture",
            "description": "<p>List of pictures for this menu.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Price",
            "description": "<p>Menu's price.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Notes",
            "description": "<p>Total of every notes on this menu.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "VoteNb",
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
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MenuNotExisting",
            "description": "<p>The menu wanted is not existing.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Database issues.</p>"
          }
        ]
      }
    },
    "filename": "routes/restaurants/menus.js",
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
    "filename": "routes/restaurants/menus.js",
    "groupTitle": "Menus"
  },
  {
    "type": "delete",
    "url": "/users/:IdUser/orders/:id",
    "title": "Delete Orders information",
    "version": "1.1.0",
    "name": "DeleteOrders",
    "group": "Orders",
    "description": "<p>Was DeleteCommands in 1.0.0</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the order.</p>"
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
            "description": "<p>Orders deleted.</p>"
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
            "field": "OrdersNotDeleted",
            "description": "<p>The order can not be deleted.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OrderNotExisting",
            "description": "<p>The order is not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Database issues.</p>"
          }
        ]
      }
    },
    "filename": "routes/users/orders.js",
    "groupTitle": "Orders"
  },
  {
    "type": "get",
    "url": "/users/:IdUser/orders/:id",
    "title": "Request specific Orders information",
    "version": "1.1.0",
    "name": "GetOrder",
    "group": "Orders",
    "description": "<p>Was GetCommand in 1.0.0</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the order.</p>"
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
            "field": "_id",
            "description": "<p>Unique id of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdRestaurant",
            "description": "<p>Unique id of the restaurant related to this order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdUser",
            "description": "<p>Unique id of the user related to this order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdDeliveryDriver",
            "description": "<p>Unique id of the delivery driver related to this order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "StartDateTime",
            "description": "<p>Start date time of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "EndDateTime",
            "description": "<p>End date time of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Price",
            "description": "<p>Price of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Products",
            "description": "<p>List of products inside this order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Status",
            "description": "<p>Current order status.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "CouponUsed",
            "description": "<p>Does a coupon was used?</p>"
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
            "field": "OrderNotFound",
            "description": "<p>The order was not found.</p>"
          }
        ]
      }
    },
    "filename": "routes/users/orders.js",
    "groupTitle": "Orders"
  },
  {
    "type": "get",
    "url": "/users/:IdUser/orders/",
    "title": "Request Orders information",
    "version": "1.1.0",
    "name": "GetOrders",
    "group": "Orders",
    "description": "<p>Was GetCommands in 1.0.0</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique id of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdRestaurant",
            "description": "<p>Unique id of the restaurant related to this order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdUser",
            "description": "<p>Unique id of the user related to this order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdDeliveryDriver",
            "description": "<p>Unique id of the delivery driver related to this order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "StartDateTime",
            "description": "<p>Start date time of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "EndDateTime",
            "description": "<p>End date time of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Price",
            "description": "<p>Price of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Products",
            "description": "<p>List of products inside this order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Status",
            "description": "<p>Current order status.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "CouponUsed",
            "description": "<p>Does a coupon was used?</p>"
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
            "field": "OrdersNotAccessible",
            "description": "<p>The model is inaccessible due to server fault.</p>"
          }
        ]
      }
    },
    "filename": "routes/users/orders.js",
    "groupTitle": "Orders"
  },
  {
    "type": "post",
    "url": "/users/:IdUser/orders/",
    "title": "Create Orders information",
    "version": "1.1.0",
    "name": "PostOrders",
    "group": "Orders",
    "description": "<p>Was PostCommands in 1.0.0</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IdRestaurant",
            "description": "<p>Unique id of the restaurant related to this order.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IdUser",
            "description": "<p>Unique id of the user related to this order.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IdDeliveryDriver",
            "description": "<p>Unique id of the delivery driver related to this order.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "StartDateTime",
            "description": "<p>Start date time of the order.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "EndDateTime",
            "description": "<p>End date time of the order.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Price",
            "description": "<p>Price of the order.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "Products",
            "description": "<p>List of products inside this order.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Status",
            "description": "<p>Current order status.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "CouponUsed",
            "description": "<p>Does a coupon was used?</p>"
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
            "description": "<p>Orders created.</p>"
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
            "field": "OrdersNotCreated",
            "description": "<p>The order can not be created.</p>"
          }
        ]
      }
    },
    "filename": "routes/users/orders.js",
    "groupTitle": "Orders"
  },
  {
    "type": "put",
    "url": "/users/:IdUser/orders/:id",
    "title": "Update Orders information",
    "version": "1.1.0",
    "name": "PutOrders",
    "group": "Orders",
    "description": "<p>Was PutCommands in 1.0.0</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the order.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IdDeliveryDriver",
            "description": "<p>Unique id of the delivery driver related to this order.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "StartDateTime",
            "description": "<p>Start date time of the order.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "EndDateTime",
            "description": "<p>End date time of the order.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Status",
            "description": "<p>Current order status.</p>"
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
            "description": "<p>Orders updated.</p>"
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
            "field": "OrdersNotUpdated",
            "description": "<p>The order can not be updated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OrderNotExisting",
            "description": "<p>The order does not exists.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Database issues.</p>"
          }
        ]
      }
    },
    "filename": "routes/users/orders.js",
    "groupTitle": "Orders"
  },
  {
    "type": "delete",
    "url": "/restaurants/:IdRestaurant/products/:id",
    "title": "Delete Product Information",
    "version": "1.1.0",
    "name": "DeleteProducts",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IdProduct",
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
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProductNotExisting",
            "description": "<p>The product cannot be found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Database issues.</p>"
          }
        ]
      }
    },
    "filename": "routes/restaurants/products.js",
    "groupTitle": "Products"
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
    "filename": "routes/restaurants/products.js",
    "groupTitle": "Products"
  },
  {
    "type": "get",
    "url": "/restaurants/:IdRestaurant/products/:id",
    "title": "Recover specific Product Information",
    "version": "1.1.0",
    "name": "GetProduct",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "IdProduct",
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
            "field": "_id",
            "description": "<p>Product's unique id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdRestaurant",
            "description": "<p>Restaurants's id related to this product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Name of this product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Description",
            "description": "<p>Description of this product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Picture",
            "description": "<p>Pictures of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Sizes",
            "description": "<p>Sizes available for this product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Notes",
            "description": "<p>Notes of this product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "VoteNb",
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
    "filename": "routes/restaurants/products.js",
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
    "filename": "routes/restaurants/products.js",
    "groupTitle": "Products"
  },
  {
    "type": "get",
    "url": "/restaurants/:IdRestaurant/products/",
    "title": "Recover Products Information",
    "version": "1.1.0",
    "name": "GetProducts",
    "group": "Products",
    "description": "<p>Returns an array of information.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Product's unique id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdRestaurant",
            "description": "<p>Restaurants's id related to this product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Name of this product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Description",
            "description": "<p>Description of this product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Picture",
            "description": "<p>Pictures of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Sizes",
            "description": "<p>Sizes available for this product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Notes",
            "description": "<p>Notes of this product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "VoteNb",
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
    "filename": "routes/restaurants/products.js",
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
    "filename": "routes/restaurants/products.js",
    "groupTitle": "Products"
  },
  {
    "type": "post",
    "url": "/restaurants/:IdRestaurant/products/",
    "title": "Create Product Information",
    "version": "1.1.0",
    "name": "PostProducts",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IdRestaurant",
            "description": "<p>Restaurants's id related to this product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Name of this product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Description",
            "description": "<p>Description of this product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Picture",
            "description": "<p>Pictures of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "Size",
            "description": "<p>Sizes available for this product.</p>"
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
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DuplicateProduct",
            "description": "<p>Product already present.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Database issues.</p>"
          }
        ]
      }
    },
    "filename": "routes/restaurants/products.js",
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
    "filename": "routes/restaurants/products.js",
    "groupTitle": "Products"
  },
  {
    "type": "put",
    "url": "/restaurants/:IdRestaurant/products/:id",
    "title": "Update Product Information",
    "version": "1.1.0",
    "name": "PutProducts",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "IdProduct",
            "description": "<p>Product's unique id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IdRestaurant",
            "description": "<p>Restaurants's id related to this product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Name of this product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Description",
            "description": "<p>Description of this product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Picture",
            "description": "<p>Pictures of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "Size",
            "description": "<p>Sizes available for this product.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Notes",
            "description": "<p>Notes of this product.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "VoteNb",
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
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProductNotExisting",
            "description": "<p>The product does not exists.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Database issues.</p>"
          }
        ]
      }
    },
    "filename": "routes/restaurants/products.js",
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
    "filename": "routes/restaurants/products.js",
    "groupTitle": "Products"
  },
  {
    "type": "delete",
    "url": "/restaurants/:id",
    "title": "Delete Restaurant Information",
    "version": "1.1.0",
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
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RestaurantNotFound",
            "description": "<p>The restaurant was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Database issues.</p>"
          }
        ]
      }
    },
    "filename": "routes/restaurants/restaurants.js",
    "groupTitle": "Restaurants"
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
    "filename": "routes/restaurants/restaurants.js",
    "groupTitle": "Restaurants"
  },
  {
    "type": "get",
    "url": "/restaurants/:id",
    "title": "Get specific Restaurant Information",
    "version": "1.1.0",
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
            "field": "IdUser",
            "description": "<p>User's id related to this restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "NameRestaurant",
            "description": "<p>Name of this restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Banner",
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
    "filename": "routes/restaurants/restaurants.js",
    "groupTitle": "Restaurants"
  },
  {
    "type": "get",
    "url": "/restaurants/",
    "title": "Get Restaurants Information",
    "version": "1.1.0",
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
            "field": "IdUser",
            "description": "<p>User's id related to this restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "NameRestaurant",
            "description": "<p>Name of this restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Banner",
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
    "filename": "routes/restaurants/restaurants.js",
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
    "filename": "routes/restaurants/restaurants.js",
    "groupTitle": "Restaurants"
  },
  {
    "type": "post",
    "url": "/restaurants/",
    "title": "Create Restaurant Information",
    "version": "1.1.0",
    "name": "PostRestaurants",
    "group": "Restaurants",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IdUser",
            "description": "<p>User's id related to this restaurant.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "NameRestaurant",
            "description": "<p>Name of this restaurant.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Banner",
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
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DuplicateRestaurant",
            "description": "<p>Restaurant already created.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Database issues.</p>"
          }
        ]
      }
    },
    "filename": "routes/restaurants/restaurants.js",
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
    "filename": "routes/restaurants/restaurants.js",
    "groupTitle": "Restaurants"
  },
  {
    "type": "put",
    "url": "/restaurants/:id",
    "title": "Update Restaurant Information",
    "version": "1.1.0",
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
            "type": "String",
            "optional": false,
            "field": "NameRestaurant",
            "description": "<p>Name of this restaurant.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Banner",
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
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RestaurantNotFound",
            "description": "<p>The restaurant was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Database issues.</p>"
          }
        ]
      }
    },
    "filename": "routes/restaurants/restaurants.js",
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
    "filename": "routes/restaurants/restaurants.js",
    "groupTitle": "Restaurants"
  },
  {
    "type": "delete",
    "url": "/users/:IdUser",
    "title": "Delete Users information",
    "version": "1.1.0",
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
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotExisting",
            "description": "<p>The user does not exists.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Database issues.</p>"
          }
        ]
      }
    },
    "filename": "routes/users/users.js",
    "groupTitle": "Users"
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
    "filename": "routes/users/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/login/tokeninfo/",
    "title": "Recover user information from token",
    "version": "1.1.0",
    "name": "GetTokenInfo",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": "<p>User information.</p>"
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
            "field": "TokenEmpty",
            "description": "<p>The token is empty.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadToken",
            "description": "<p>The token is not right.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "WrongPermission",
            "description": "<p>The permission accorded is not sufficient.</p>"
          }
        ]
      }
    },
    "filename": "routes/users/login.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/",
    "title": "Recover specific Users information",
    "version": "1.1.0",
    "name": "GetUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IdUser",
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
            "field": "Name",
            "description": "<p>User's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "FirstName",
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
            "field": "Password",
            "description": "<p>User's password.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "BirthDate",
            "description": "<p>Birthdate of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Address",
            "description": "<p>User's address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "InscriptionDate",
            "description": "<p>Date when the user create its account.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PatronageCode",
            "description": "<p>Unique code that permits the user to patron someone.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "PatronageNb",
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
    "filename": "routes/users/users.js",
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
    "filename": "routes/users/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/",
    "title": "Recover Users information",
    "version": "1.1.0",
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
            "field": "Name",
            "description": "<p>User's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "FirstName",
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
            "field": "Password",
            "description": "<p>User's password.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "BirthDate",
            "description": "<p>Birthdate of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Address",
            "description": "<p>User's address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "InscriptionDate",
            "description": "<p>Date when the user create its account.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PatronageCode",
            "description": "<p>Unique code that permits the user to patron someone.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "PatronageNb",
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
    "filename": "routes/users/users.js",
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
    "filename": "routes/users/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/login/",
    "title": "Create Users information",
    "version": "1.1.0",
    "name": "PostLogin",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>User's email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Password",
            "description": "<p>User's password.</p>"
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
            "field": "access_token",
            "description": "<p>User authentication token.</p>"
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
            "field": "EmailPasswordError",
            "description": "<p>Either the password or email is not in the request.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "WrongAuthentification",
            "description": "<p>The authentification is not possible.</p>"
          }
        ]
      }
    },
    "filename": "routes/users/login.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/login/",
    "title": "Create Users information",
    "version": "1.0.0",
    "name": "PostLogin",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>User's email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "MotDePasse",
            "description": "<p>User's password.</p>"
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
            "field": "token",
            "description": "<p>User authentication token.</p>"
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
            "field": "UserNotLoggedIn",
            "description": "<p>The user cannot be logged in.</p>"
          }
        ]
      }
    },
    "filename": "routes/users/login.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/login/register/",
    "title": "Create Users information",
    "version": "1.1.0",
    "name": "PostUsers",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>User's name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "FirstName",
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
            "field": "Password",
            "description": "<p>User's password.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "BirthDate",
            "description": "<p>Birthdate of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Address",
            "description": "<p>User's address.</p>"
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
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmailPasswordError",
            "description": "<p>Either the email or password is empty.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DuplicateUser",
            "description": "<p>User already exists.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Database issues.</p>"
          }
        ]
      }
    },
    "filename": "routes/users/login.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/login/register/",
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
    "filename": "routes/users/login.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/users/:IdUser",
    "title": "Update Users information",
    "version": "1.1.0",
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
            "field": "Name",
            "description": "<p>User's name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "FirstName",
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
            "field": "Password",
            "description": "<p>User's password.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "BirthDate",
            "description": "<p>Birthdate of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Address",
            "description": "<p>User's address.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "InscriptionDate",
            "description": "<p>Date when the user create its account.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "PatronageCode",
            "description": "<p>Unique code that permits the user to patron someone.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "PatronageNb",
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
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotExisting",
            "description": "<p>The user does not exists.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Database issues.</p>"
          }
        ]
      }
    },
    "filename": "routes/users/users.js",
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
    "filename": "routes/users/users.js",
    "groupTitle": "Users"
  }
] });
