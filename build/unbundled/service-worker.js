/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["/bower_components/golden-layout/src/css/goldenlayout-base.css","1e81bbe629ec0118e5d33298ecc5dc6d"],["/bower_components/golden-layout/src/css/goldenlayout-light-theme.css","7feb981e535efb2f8ed3f11f2ae71247"],["/bower_components/golden-layout/src/js/LayoutManager.js","cc8441471da29129392693ebe427dcc8"],["/bower_components/golden-layout/src/js/config/ItemDefaultConfig.js","9c515058c2ac36e6e5f7a980a857e65f"],["/bower_components/golden-layout/src/js/config/defaultConfig.js","dd96b2bc8be9a8c2446c834b660f317c"],["/bower_components/golden-layout/src/js/container/ItemContainer.js","fffb0d65de1024239c7f9230eb340a68"],["/bower_components/golden-layout/src/js/controls/BrowserPopout.js","426f0eb5651b596cceea820dc6acb7ca"],["/bower_components/golden-layout/src/js/controls/DragProxy.js","2e2084b3fee4a7027b4edd24e71c75b8"],["/bower_components/golden-layout/src/js/controls/DragSource.js","19a64a2cd82b1b6c2883ef38c8d32d59"],["/bower_components/golden-layout/src/js/controls/DropTargetIndicator.js","8a55a1bde67c7a75e259db773d126178"],["/bower_components/golden-layout/src/js/controls/Header.js","6e993bdbf8ed2eaeb4ed3b112669af14"],["/bower_components/golden-layout/src/js/controls/HeaderButton.js","9a17db8a58db2fb364c24c6a59e228d6"],["/bower_components/golden-layout/src/js/controls/Splitter.js","d861a39dd078fac0b36116870e21e681"],["/bower_components/golden-layout/src/js/controls/Tab.js","368a4bda5309e8503e788c74fa704cc0"],["/bower_components/golden-layout/src/js/controls/TransitionIndicator.js","476ab521b434014d6a2647ef24b9a036"],["/bower_components/golden-layout/src/js/errors/ConfigurationError.js","7cdab718f36298ab0ec6e984f907518e"],["/bower_components/golden-layout/src/js/items/AbstractContentItem.js","8949f1803a91bb26c4eda91af0aaff1f"],["/bower_components/golden-layout/src/js/items/Component.js","1c50a8b840bebbc7ab00b24dac5c7437"],["/bower_components/golden-layout/src/js/items/Root.js","5f5d0d949cbb50c33a85d44f292bee47"],["/bower_components/golden-layout/src/js/items/RowOrColumn.js","aaef02cf82c5c54d47594646167c3f80"],["/bower_components/golden-layout/src/js/items/Stack.js","17d02f71489a9f16febf1d382096d125"],["/bower_components/golden-layout/src/js/utils/BubblingEvent.js","674b411ac0664473ee86d230de0cb50c"],["/bower_components/golden-layout/src/js/utils/ConfigMinifier.js","7613424677f4d6f2feccdb25e83cc3c1"],["/bower_components/golden-layout/src/js/utils/DragListener.js","a6c1d9d2647b940a43823f821ddeb54b"],["/bower_components/golden-layout/src/js/utils/EventEmitter.js","4a4320f1a7e244a1a87388f9700de403"],["/bower_components/golden-layout/src/js/utils/EventHub.js","20de88f09f61354daa05dd139ad2f2e5"],["/bower_components/golden-layout/src/js/utils/utils.js","dd1226e7b5efe07c92ceea5e46e033d7"],["/bower_components/golden-layout/start.js","61a02ba7ad5d21896edeae7ddc9b3bd9"],["/bower_components/golden-layout/test.css","b4d10c4b4d89284d705c817fd11e208a"],["/bower_components/jquery/dist/jquery.js","c49518746f4ef814bafa9919523d7b4d"],["/bower_components/polymer/polymer-micro.html","80189e21b5bfc7f2f7a59b7961bbae4e"],["/bower_components/polymer/polymer-mini.html","5c18850b2538fb00f92253e60233f3be"],["/bower_components/polymer/polymer.html","dbf9881d17205aa5a47b4c87c69d55d7"],["/bower_components/polymer/src/lib/annotations/annotations.html","3e549e057fe93c963c1c4ee3c3a9bc5a"],["/bower_components/polymer/src/lib/apply-shim.html","b506686e0ad6c9f18eaf4d5ec810f16d"],["/bower_components/polymer/src/lib/array-splice.html","a7c4263b0a7c6aab084a1d5c35642065"],["/bower_components/polymer/src/lib/async.html","fcd89166b239f267bf28bd2ac5ccef50"],["/bower_components/polymer/src/lib/base.html","f10837327545266b862b09573771a822"],["/bower_components/polymer/src/lib/bind/accessors.html","0513fc872245479045e9612c8531c93a"],["/bower_components/polymer/src/lib/bind/effects.html","4d123d49422756a1e7391d70bcb1772f"],["/bower_components/polymer/src/lib/case-map.html","a22138a59d9099f858e077d47ad80a87"],["/bower_components/polymer/src/lib/collection.html","05042356430ac8d01e43060c2224c57b"],["/bower_components/polymer/src/lib/css-parse.html","274788b53c9e0866e0b1cf2fba52c870"],["/bower_components/polymer/src/lib/custom-style.html","d09f79304e28e11c8a36420c53c407fa"],["/bower_components/polymer/src/lib/debounce.html","342a8207d9155777bacc971b99efd60b"],["/bower_components/polymer/src/lib/dom-api-classlist.html","f866c846b31b6e8042da0aee0f215ad5"],["/bower_components/polymer/src/lib/dom-api-distributed-nodes-observer.html","0a218be99a56c8cd73b418e2cbfb823e"],["/bower_components/polymer/src/lib/dom-api-effective-nodes-observer.html","9a0dbb033c1d69ccfd58e5281d576718"],["/bower_components/polymer/src/lib/dom-api-event.html","e4ef6b8bf345da24f595bb83c2127e67"],["/bower_components/polymer/src/lib/dom-api-flush.html","c257c9a62f9e7221dae842c93e9a127d"],["/bower_components/polymer/src/lib/dom-api-shadow.html","60d5aee8818791af625b084b0180302a"],["/bower_components/polymer/src/lib/dom-api-shady.html","fd50bfd1fea03c8751dbba84b45e0593"],["/bower_components/polymer/src/lib/dom-api.html","4343cefc7fe8c4088f0aeacae0337cde"],["/bower_components/polymer/src/lib/dom-innerHTML.html","7bad10f370f25675fcb7760d86e81b06"],["/bower_components/polymer/src/lib/dom-module.html","677d3217a286e8ef520f82c0aee30ef8"],["/bower_components/polymer/src/lib/dom-tree-api.html","b41123722964ccd6d3e3f229d2b257a2"],["/bower_components/polymer/src/lib/lang.html","29d9e1dc98ec15ebcfa905533bd997f4"],["/bower_components/polymer/src/lib/polymer-bootstrap.html","6bf8d003540d3fef83283bdf658bea9d"],["/bower_components/polymer/src/lib/render-status.html","451fd6a26de6e02c226c11308336d849"],["/bower_components/polymer/src/lib/resolve-url.html","72f698d45a08f5094835cfe25096340f"],["/bower_components/polymer/src/lib/settings.html","82674165d692a8ef00a852aad2033d62"],["/bower_components/polymer/src/lib/style-cache.html","12085789a6986d73de749a581d65258d"],["/bower_components/polymer/src/lib/style-defaults.html","4d0e9c497a06326c4ec97791177ff439"],["/bower_components/polymer/src/lib/style-extends.html","4afb2e47cfab4321a440d05193de7afc"],["/bower_components/polymer/src/lib/style-properties.html","4700de3641fed0f89a67cc91f67c44b5"],["/bower_components/polymer/src/lib/style-transformer.html","94bfffb5fdfe41b6996667f8a9522e43"],["/bower_components/polymer/src/lib/style-util.html","255a76c2eab4d6ccc25d51d55d85da21"],["/bower_components/polymer/src/lib/template/array-selector.html","f03bcde09ca27361f6f0448317349b10"],["/bower_components/polymer/src/lib/template/dom-bind.html","abc622897ce7f39e88e538008a8121ab"],["/bower_components/polymer/src/lib/template/dom-if.html","819d6deaebe6e5cf8705b206167d6bb9"],["/bower_components/polymer/src/lib/template/dom-repeat.html","24f6d7e29a18a8145f6eb05fd5dfc5b6"],["/bower_components/polymer/src/lib/template/dom-template.html","75632f62e61455ca34c68331156ffc57"],["/bower_components/polymer/src/lib/template/templatizer.html","ff056d19d8f92560617b45384939e08d"],["/bower_components/polymer/src/lib/unresolved.html","5a9a23402f51109d24bcbe07d988a0d3"],["/bower_components/polymer/src/micro/attributes.html","9e6f14be3685874d4780503791e85fbe"],["/bower_components/polymer/src/micro/behaviors.html","ae683ff5f82730d61b1df43afecc8893"],["/bower_components/polymer/src/micro/constructor.html","a1e4d170624c90f434f187d64a109f25"],["/bower_components/polymer/src/micro/extends.html","66c3e8374d888740bb0fb3686aee2032"],["/bower_components/polymer/src/micro/properties.html","88c41100b1ba48ce0101cc2f80991a5a"],["/bower_components/polymer/src/micro/tag.html","92440b966e96044133f2c49b7aae544c"],["/bower_components/polymer/src/mini/debouncer.html","d39f58fcc2e3421854c7b7195f3da392"],["/bower_components/polymer/src/mini/ready.html","d048f750e5a0ce8065a700063667ecc6"],["/bower_components/polymer/src/mini/shadow.html","f00f44e623b95ab6c705e7ecd418bf37"],["/bower_components/polymer/src/mini/shady.html","ab572243f48289cdd6d136766155d8e4"],["/bower_components/polymer/src/mini/template.html","94a4b3902066333f06a0fabd030d5179"],["/bower_components/polymer/src/polymer-lib.html","adc910ccb1651650b2ad7ab3fcfb09ea"],["/bower_components/polymer/src/standard/annotations.html","a2be68347cdd69b73a8ca0e52b0362f5"],["/bower_components/polymer/src/standard/configure.html","492d8ebde82435c086ef01decc655437"],["/bower_components/polymer/src/standard/effectBuilder.html","d25a6db82707de7b5d0c55afa0908f4d"],["/bower_components/polymer/src/standard/events.html","78dd0190fc926b859b273e7f7bccf257"],["/bower_components/polymer/src/standard/gestures.html","2d7d0b910480a4e38ea2dad31c13d3c2"],["/bower_components/polymer/src/standard/notify-path.html","d232d699c2d00caed700659bee81c4fa"],["/bower_components/polymer/src/standard/resolveUrl.html","2a96c621218f671d499f97fc125b2c42"],["/bower_components/polymer/src/standard/styling.html","7e7aa7815c2f7c873f3b441c687acc7b"],["/bower_components/polymer/src/standard/utils.html","393d444e3cc40a8dc0bbee487673cac0"],["/bower_components/polymer/src/standard/x-styling.html","522dddcec3d711c51f93a1eba1d1927f"],["/bower_components/webcomponentsjs/webcomponents-lite.js","6e4e329460da56397f5602f8b1816694"],["/index.html","62fa4d14db40b395c435bb2b74901f67"],["/src/greeting-card/greeting-card.html","daf3501ae54f93313530c1d8d9cd780d"],["/src/pmd-project-app/pmd-project-app.html","ba62dc3485ac5441c84a353a63d9720a"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




