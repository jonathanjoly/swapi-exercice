# API 

The base API swapi.co is not running anymore: [See here](https://swapi.dev/about).

There is a replacement at this utl: https://swapi.dev/.

## Modules 

There is existing modules:

* [swapi-node](https://www.npmjs.com/package/swapi-node)
* [SWAPI-Wrapper](https://github.com/cfjedimaster/SWAPI-Wrapper)

    For the exercice purpose I decided to not use it.


## Services

### Entry / Root

URL : https://swapi.dev/api/

Get the url's of available services. Here we can find the films url.

```json 
{
    "people": "http://swapi.dev/api/people/", 
    "planets": "http://swapi.dev/api/planets/", 
    "films": "http://swapi.dev/api/films/", 
    "species": "http://swapi.dev/api/species/", 
    "vehicles": "http://swapi.dev/api/vehicles/", 
    "starships": "http://swapi.dev/api/starships/"
}
```

### Films

URL : https://swapi.dev/api/films/


We receive an object with the property results that contains the list of films.
We fond for each films a property episode_id that contain a number.
This value is the order of the film in the Star Wars Chronology.

We also found for each film a list of planets: 

```json 
"planets": [
    "http://swapi.dev/api/planets/4/", 
    "http://swapi.dev/api/planets/5/", 
    "http://swapi.dev/api/planets/6/", 
    "http://swapi.dev/api/planets/27/"
], 
```

#### A given film

URL : https://swapi.dev/api/films/{filmId}/
filmId: The film number in their release chronology. 

We found the same information than in the list of films (above).

```json 
{
    "title": "A New Hope", 
    "episode_id": 4, 
    "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....", 
    "director": "George Lucas", 
    "producer": "Gary Kurtz, Rick McCallum", 
    "release_date": "1977-05-25", 
    "characters": [
        "http://swapi.dev/api/people/1/", 
        "http://swapi.dev/api/people/2/", 
        "http://swapi.dev/api/people/3/", 
        "http://swapi.dev/api/people/4/", 
        "http://swapi.dev/api/people/5/", 
        "http://swapi.dev/api/people/6/", 
        "http://swapi.dev/api/people/7/", 
        "http://swapi.dev/api/people/8/", 
        "http://swapi.dev/api/people/9/", 
        "http://swapi.dev/api/people/10/", 
        "http://swapi.dev/api/people/12/", 
        "http://swapi.dev/api/people/13/", 
        "http://swapi.dev/api/people/14/", 
        "http://swapi.dev/api/people/15/", 
        "http://swapi.dev/api/people/16/", 
        "http://swapi.dev/api/people/18/", 
        "http://swapi.dev/api/people/19/", 
        "http://swapi.dev/api/people/81/"
    ], 
    "planets": [
        "http://swapi.dev/api/planets/1/", 
        "http://swapi.dev/api/planets/2/", 
        "http://swapi.dev/api/planets/3/"
    ], 
    "starships": [
        "http://swapi.dev/api/starships/2/", 
        "http://swapi.dev/api/starships/3/", 
        "http://swapi.dev/api/starships/5/", 
        "http://swapi.dev/api/starships/9/", 
        "http://swapi.dev/api/starships/10/", 
        "http://swapi.dev/api/starships/11/", 
        "http://swapi.dev/api/starships/12/", 
        "http://swapi.dev/api/starships/13/"
    ], 
    "vehicles": [
        "http://swapi.dev/api/vehicles/4/", 
        "http://swapi.dev/api/vehicles/6/", 
        "http://swapi.dev/api/vehicles/7/", 
        "http://swapi.dev/api/vehicles/8/"
    ], 
    "species": [
        "http://swapi.dev/api/species/1/", 
        "http://swapi.dev/api/species/2/", 
        "http://swapi.dev/api/species/3/", 
        "http://swapi.dev/api/species/4/", 
        "http://swapi.dev/api/species/5/"
    ], 
    "created": "2014-12-10T14:23:31.880000Z", 
    "edited": "2014-12-20T19:49:45.256000Z", 
    "url": "http://swapi.dev/api/films/1/"
}
```


## Planets 

URL : http://swapi.dev/api/planets/{planetId}/
planetId: An number that identifies a planet.

In the data we found the properties: 
* surface_water (number should > 0).
* terrain (string should contain "mountains").

that we should use to know if we take this planet for the computation.



``` json
{
    "name": "Alderaan", 
    "rotation_period": "24", 
    "orbital_period": "364", 
    "diameter": "12500", 
    "climate": "temperate", 
    "gravity": "1 standard", 
    "terrain": "grasslands, mountains", 
    "surface_water": "40", 
    "population": "2000000000", 
    "residents": [
        "http://swapi.dev/api/people/5/", 
        "http://swapi.dev/api/people/68/", 
        "http://swapi.dev/api/people/81/"
    ], 
    "films": [
        "http://swapi.dev/api/films/1/", 
        "http://swapi.dev/api/films/6/"
    ], 
    "created": "2014-12-10T11:35:48.479000Z", 
    "edited": "2014-12-20T20:58:18.420000Z", 
    "url": "http://swapi.dev/api/planets/2/"
}
```

Note: Inside planets we also have the a link to the films.

```json 
    "films": [
        "http://swapi.dev/api/films/1/", 
        "http://swapi.dev/api/films/6/"
    ],
```

## Options

### Full use of links 

In this case we start the use of the api by the root.
Start with https://swapi.dev/api/ to found the films url,
Loop on films to found the required one, use the links of planets in parallel.
Filter the planets and make the computation.

#### Benefit
* One of the tested point of this exercice (Send simultaneous/concurrent calls).

#### Drawback
* Multiple call (1root + 1films + n planets).
* Not straight forward.
* Don't trust on the api structure.
* The serach on the film can be tricky (episode_id !== film release order).

## Start with the call to /film/{filmId}

We start with https://swapi.dev/api/films/{filmId}/.
Use the links of planets in parallel.
Filter the planets and make the computation.

#### Benefit
* Less call (1 fimls + n planets). 
* One of the tested point of this exercice (Send simultaneous/concurrent calls).

#### Drawback


## Only planets 

Only call http://swapi.dev/api/planets/.
Filter based on films url in addtition of other filters.
Make de computation.

#### Benefit
* Only one call.

#### Drawback
* Use url to filter is not a really good idea.
* Missing one of the tested point (Send simultaneous/concurrent calls).

# Tools

* node.js v14.15.1
* yarn 1.22.4
* jest 26.6.3
* typescript 4.0.5
* tslint 6.1.3
* commitizen 4.2.2
* conventional-changelog-cli 2.1.1

## Libs

* axios 0.21.0
* lodash 4.17.20
* node-color-log 5.2.0

## Scripts

    * test: run the unit test
    * changelog: generate the changelog based on commit
    * commit: make a formatted commit
    * build: transform our typescript into commonjs
    * lint: check the code style
    * start: run the app