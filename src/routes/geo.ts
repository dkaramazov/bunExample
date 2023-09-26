import { Elysia } from 'elysia'
import initGeoController from '../controllers/geoController';
import Database from 'bun:sqlite';

export default (db: Database) => {
    const GeoController = initGeoController(db);

    return new Elysia({ prefix: '/geo'})
        .get('/', GeoController.getGeoList)
        .get('/:id', GeoController.getGeoById)
        .post('/', GeoController.createGeo)
        .put('/:id', GeoController.updateGeo) 
}
    
