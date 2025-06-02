/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2828848192")

  // update collection data
  unmarshal({
    "name": "avis_site"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2828848192")

  // update collection data
  unmarshal({
    "name": "avis"
  }, collection)

  return app.save(collection)
})
