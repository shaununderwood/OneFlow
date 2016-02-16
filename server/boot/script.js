module.exports = function( app){
  'use strict';

  // Load the spec from json doc
  let findArtistsIdSpec = require( './spotify-search-for-artist.json');
  let reqFindArtistId = restConnector.fromJSON( findArtistsIdSpec);

  let findAlbumsSpec = require( './spotify-albums.json');
  let reqFindAlbums = restConnector.fromJSON( findAlbumsSpec);

  let artistName = 'Iron Maiden';

  let getArtistResponse = 
  reqFindArtistId.invoke( { q: artistName});



};