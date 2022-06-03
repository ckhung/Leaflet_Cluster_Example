Leaflet Cluster Example
--

This is a leaflet map of clustered markers using Leaflet and the
[Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster)
plugin by [Dave Leaver](https://github.com/danzel).

You may have to put this directory somewhere your
web server can display, such as /var/www/html
or ~/public\_html (if userdir is enabled) for apache2.
Or without any web server, you can open the index.html file as a local file
in your browser provided that (A) you started the chrome
browser with the --allow-file-access-from-files option or
(B) security.fileuri.strict\_origin\_policy is set to False in your firefox.
See [javascriptCanReadLocalFiles](https://github.com/ckhung/javascriptCanReadLocalFiles) for details.

To display your own data file, put your geojson file in the
map/ directory and create a symbolic link "markers.geojson" to it.
Then refresh your browser.
All subfields in the "properties" field of each "feature"
in the geojson file are displayed when the marker is clicked.
Property names which begin with "name" are displayed first,
other properties are sorted according to their names.

This project was originally cloned from [Andy Maloney's Leaflet Cluster Example](https://github.com/asmaloney/Leaflet_Cluster_Example).
See [his post](https://asmaloney.com/2015/06/code/clustering-markers-on-leaflet-maps) for details.
