/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/main.css",
    "revision": "63309daaa2cc1270a6d7ddbd0f7b4b93"
  },
  {
    "url": "img/apps.png",
    "revision": "03af80307d9728f322563a5f0f35914b"
  },
  {
    "url": "img/celular.jpg",
    "revision": "55b1e207c1bcfca349ff4fbc43caebc5"
  },
  {
    "url": "img/grafica.jpg",
    "revision": "fabc42d8ef145de98c93ee6859eddf94"
  },
  {
    "url": "img/imagens3.png",
    "revision": "60e0e9199f44b700d261bcede6b4a962"
  },
  {
    "url": "img/images/apple-touch-icon.png",
    "revision": "726a4d4f3d7a1ad75b9c0f7a7590e2fc"
  },
  {
    "url": "img/images/chrome-splashscreen-icon-384x384.png",
    "revision": "c5cfcfe833a19fdb430df8d9041a6ba6"
  },
  {
    "url": "img/images/chrome-touch-icon-192x192.png",
    "revision": "05781853568c884c7ced169983a68da3"
  },
  {
    "url": "img/images/icon-128x128.png",
    "revision": "541fbab799be60fd0808839920794193"
  },
  {
    "url": "img/images/ms-touch-icon-144x144-precomposed.png",
    "revision": "1e1cc8c5f3d77b82507c125448acdd94"
  },
  {
    "url": "img/logo.svg",
    "revision": "b3a89e97a0193c54c7cba18437d3bc5a"
  },
  {
    "url": "img/notificacion.jpg",
    "revision": "012a490cc16380315da00ed3ce3c6c6f"
  },
  {
    "url": "img/senal.jpg",
    "revision": "3fb66dc093ca7e0dc537fa82372ab12f"
  },
  {
    "url": "index.html",
    "revision": "b8f92f5079f477d3975c0619b4e7773f"
  },
  {
    "url": "js/main.js",
    "revision": "11badc6fccf12eee1e8cef43e3f67f9b"
  },
  {
    "url": "js/registro.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "manifest.json",
    "revision": "8d9b310cef1bb913f5bcef3758f85f40"
  },
  {
    "url": "telefono2.ai",
    "revision": "41afe2e4bf539b22bbdc5e720c4e9b7c"
  },
  {
    "url": "workbox-config.js",
    "revision": "c1b35ef5d7c93f5a50b25bab8791a1d6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
