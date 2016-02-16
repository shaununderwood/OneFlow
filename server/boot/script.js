module.exports = function( app){
  'use strict';

  var defer = require("promise").defer;

  // Load the spec from json doc
  let findArtistsIdSpec = require( './spotify-search-for-artist.json');
  let reqFindArtistId = restConnector.fromJSON( findArtistsIdSpec);

  let findAlbumsSpec = require( './spotify-albums.json');
  let reqFindAlbums = restConnector.fromJSON( findAlbumsSpec);

  let artistName = 'Iron Maiden';

  // Get Artist Id
  let artistResponseReceived = defer();
  reqFindArtistId.invoke( { q: artistName}, ( data) => {

    artistResponseReceived.resolve( data);
  });

  // Get Artist Albums
  let albumResponseReceived = defer();
  artistResponseReceived.promise.then( ( artistData ) => {

      reqFindAlbums.invoke( { artistId: artistId}, ( data ) => {
        albumResponseReceived.resolve( data);
      });
  });

  // process and save Albums
  albumResponseReceived.promise.then( ( albumData ) => {
    let albums = { };

    // filter out using a map to key album.name values
    albumData.items.forEach( ( album ) => {
      albums[ album.name] = album.name;
    });

    // save these to a database / flatfile
    
  });


};


