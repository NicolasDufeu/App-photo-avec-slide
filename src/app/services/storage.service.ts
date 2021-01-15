import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }
    
  async getFavPhotos(){
      const fav = await this.storage.get('MyFavPhotos');
      return fav;
  }
    
    setFavPhotos( array ){
        this.storage.set('MyFavPhotos', array);
    }
    
    async getFavById(id){
        const fav = await this.getFavPhotos();
        const index = fav ? fav.findIndex( item => item.id == id ) : -1;
        return index;
    }
}
