/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2869346101")

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "select1232983604",
    "maxSelect": 1,
    "name": "categorie",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "entree",
      "plat",
      "dessert",
      "boisson"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2869346101")

  // remove field
  collection.fields.removeById("select1232983604")

  return app.save(collection)
})
