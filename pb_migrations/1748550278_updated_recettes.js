/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2869346101")

  // add field
  collection.fields.addAt(9, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2533444552",
    "hidden": false,
    "id": "relation1743808700",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "commentaire",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2869346101")

  // remove field
  collection.fields.removeById("relation1743808700")

  return app.save(collection)
})
