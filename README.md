youtube-spotify-playlist-converter
==================================

Youtube playlist to spotify playlist converter

How to use
==========

Run the contents of y2s.js in the console of your browser on a youtube playlist page (Eg: http://www.youtube.com/playlist?list=PLFC47D95C3AB20CFA)
Now run Y2S.getSpotifyList();

An alert box shows up with all the spotify uri's (separated by space) the script could find.

Copy the contents and paste it into the (any or new) playlist pane in spotify client.

Logic
=====
Take the title of video and pass it to spotify track table in YQL

What else to do
===============
Beautify how results are shown (not the yucky alert, probably a lightbox)

Few promotional channels like VEVO give title in <video title, artist> format which we could use to enhance the search

Show the progress (progress bar?)
