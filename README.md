# JSON DB

JSON DB is a typescript based database used for making small databases for small softwares

I used this database on my very recent repo, I built a micro-bloggin application called [Sema](https://github.com/Phillyo10/sema)

I built this database because while I was using the **'nedb'** npm package, I was having troubles updating the database in real-time so I took matters into my hands and made a small db myself

## Making a Database
Creating a databse using **JSON DB** is very easy to make! Here's a sample code below:

```js
const database = new JsonDb('db-folder', 'db-name')
```

*db-folder* is the folder that will hold all the database files

*db-name* is the name of the database


## Quering the Database
The queries used in **JSON DB** is similar to the syntax used in **mongoDB**

## Creating Sample Database
```js
const socialMedia = new JsonDb('db', 'social_media')
```

### Insert Query
```js
socialMedia.insert(
    { name: "Insta", c: "Meta" },
    (data: any, error: any) => {}
)
```

### Select * Query
```js
socialMedia.find(
    { c: "Meta" },
    (data: any, error: any) => console.log(data)
)
```


### Select ONE Query
```js
socialMedia.findOne(
    { c: "Meta" },
    (data: any, error: any) => console.log(data)
)
```

### Update Query
```js
socialMedia.update(
    { name: "Insta" },
    { name: "Instagram" },
    false,
    (data: any, error: any) => console.log(data)
)
```

### Insert Query
```js
socialMedia.delete(
    { name: "Instagram", c: "Meta" },
    (data: any, error: any) => {}
)
```