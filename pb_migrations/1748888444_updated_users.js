/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "select2860927612",
    "maxSelect": 1,
    "name": "regime",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "halal",
      "végan",
      "sans-gluten",
      "végétarien"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // remove field
  collection.fields.removeById("select2860927612")

  return app.save(collection)
})
