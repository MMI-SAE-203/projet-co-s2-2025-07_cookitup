/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2869346101")

  // update collection data
  unmarshal({
    "name": "nom"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2869346101")

  // update collection data
  unmarshal({
    "name": "recettes"
  }, collection)

  return app.save(collection)
})
