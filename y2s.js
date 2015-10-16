var Y2S = {
  videos: '',
	downloaded: 0,
	totalTracks: 0,
	artistTitleContainer: [],
	spotifyUri: [],
	initialize: function(){
		this.videos = document.querySelectorAll('.pl-video-title-link');
		this.artistTitleContainer.length = this.spotifyUri.length = this.downloaded = this.totalTracks = 0;
	},
	makeList: function(){
		this.initialize();
		for (var i=0, length = this.videos.length; i < length; i++){
			this.artistTitleContainer.push(this.videos[i].innerText);
		}
	},
	showPlainList: function(){
		this.makeList();
		alert(this.artistTitleContainer.join("\n"));
	},
	getSpotifyList: function(){
		this.makeList();
		this.totalTracks = this.artistTitleContainer.length;
		this.artistTitleContainer.forEach(function(artistTitle){
			var scriptYql = 'http://query.yahooapis.com/v1/public/yql?q='+encodeURIComponent('SELECT * FROM spotify.search.track where track = "'+artistTitle+'" limit 1')+'&format=json&env='+encodeURIComponent('store://datatables.org/alltableswithkeys')+'&callback=Y2S.getTrack',scriptNode= document.createElement('script');

			scriptNode.type= 'text/javascript';
			scriptNode.src= scriptYql;

			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(scriptNode, s);
		});
	},
	getTrack: function(r){
		if (r.query && r.query.results && r.query.results.track)
		this.spotifyUri.push(r.query.results.track.href);

		this.downloaded++;
		if (this.downloaded == this.totalTracks){
			alert(this.spotifyUri.join(' '));
		}		
	}
};
