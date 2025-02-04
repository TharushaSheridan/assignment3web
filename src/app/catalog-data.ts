import {CatalogJson} from "./json-structure";

export const catalog: CatalogJson = {
  "pets" : [ {
    "id" : '1',
    "name" : "Charlie",
    "petKind" : "dog",
    "age" : 3,
    "image" :{"small":"charlie_dog.jpg"} ,
    "ownerId" : 1,
    // "_links" : {
    //   "self" : {
    //     "href" : "http://localhost:8080/api/pets/1"
    //   },
    //   "pet" : {
    //     "href" : "http://localhost:8080/api/pets/1"
    //   },
    //   "owner" : {
    //     "href" : "http://localhost:8080/api/pets/1/owner"
    //   }
    // }
  }, {
    "id" : '2',
    "name" : "Fluffy",
    "petKind" : "cat",
    "age" : 2,
    "image" :{"small": "fluffy_cat.jpg"},
    "ownerId" : 1,
    // "_links" : {
    //   "self" : {
    //     "href" : "http://localhost:8080/api/pets/2"
    //   },
    //   "pet" : {
    //     "href" : "http://localhost:8080/api/pets/2"
    //   },
    //   "owner" : {
    //     "href" : "http://localhost:8080/api/pets/2/owner"
    //   }
    // }
  }, {
    "id" : '3',
    "name" : "Oscar",
    "petKind" : "cat",
    "age" : 6,
    "image" :{"small": "oscar_cat.jpg"},
    "ownerId" : 2,
    // "_links" : {
    //   "self" : {
    //     "href" : "http://localhost:8080/api/pets/3"
    //   },
    //   "pet" : {
    //     "href" : "http://localhost:8080/api/pets/3"
    //   },
    //   "owner" : {
    //     "href" : "http://localhost:8080/api/pets/3/owner"
    //   }
    // }
  }, {
    "id" : '4',
    "name" : "Tweety",
    "petKind" : "canary",
    "age" : 3,
    "image" :{"small": "tweety_canary.jpg"},
    "ownerId" : 4,
    // "_links" : {
    //   "self" : {
    //     "href" : "http://localhost:8080/api/pets/4"
    //   },
    //   "pet" : {
    //     "href" : "http://localhost:8080/api/pets/4"
    //   },
    //   "owner" : {
    //     "href" : "http://localhost:8080/api/pets/4/owner"
    //   }
    // }
  }, {
    "id" : '5',
    "name" : "Riley",
    "petKind" : "dog",
    "age" : 5,
    "image" :{"small": "riley_dog.jpg"},
    "ownerId" : 4,
    // "_links" : {
    //   "self" : {
    //     "href" : "http://localhost:8080/api/pets/5"
    //   },
    //   "pet" : {
    //     "href" : "http://localhost:8080/api/pets/5"
    //   },
    //   "owner" : {
    //     "href" : "http://localhost:8080/api/pets/5/owner"
    //   }
    // }
  }, {
    "id" : '6',
    "name" : "Sam",
    "petKind" : "rabbit",
    "age" : 2,
    "image" :{"small": "sam_rabbit.jpg"},
    "ownerId" : 4,
    // "_links" : {
    //   "self" : {
    //     "href" : "http://localhost:8080/api/pets/6"
    //   },
    //   "pet" : {
    //     "href" : "http://localhost:8080/api/pets/6"
    //   },
    //   "owner" : {
    //     "href" : "http://localhost:8080/api/pets/6/owner"
    //   }
    // }
  }, {
    "id" : '7',
    "name" : "Marx",
    "petKind" : "hamster",
    "age" : 1,
    "image" :{"small": "marx_hamster.jpg"},
    "ownerId" : 4,
    // "_links" : {
    //   "self" : {
    //     "href" : "http://localhost:8080/api/pets/7"
    //   },
    //   "pet" : {
    //     "href" : "http://localhost:8080/api/pets/7"
    //   },
    //   "owner" : {
    //     "href" : "http://localhost:8080/api/pets/7/owner"
    //   }
    // }
  } ]
}
