/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2869346101")

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "select2860927612",
    "maxSelect": 4,
    "name": "regime",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "végétarien",
      "végan",
      "sans-gluten",
      "halal"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2869346101")

  // remove field
  collection.fields.removeById("select2860927612")

  return app.save(collection)
})
