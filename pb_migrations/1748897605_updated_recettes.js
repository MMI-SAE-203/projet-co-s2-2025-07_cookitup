/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2869346101")

  // remove field
  collection.fields.removeById("bool4018512588")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2869346101")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "bool4018512588",
    "name": "favori",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
})
