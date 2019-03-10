import { Injectable } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private googlePlus: GooglePlus, private facebook: Facebook) { }
}
