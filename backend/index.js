const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");   //using this we can get our backend directory in express App.. 
const cors = require("cors");
const { type } = require("os");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());   //using this our project is connect to express and 4000 port

//Database connection with  mongodb..
mongoose.connect("mongodb://localhost:27017/E-commerce_App")
    .then(() => {
        console.log("connection is successfully")
    }).catch((error) => {
        console.log("No connection", error);
    })
// const DB=async()=>{
//    try {
//     await  mongoose.connect("mongodb+srv://MernP:mern1712@cluster0.pbhh6vh.mongodb.net/");
//     console.log(`DB is connected `)
//    } catch (error) {
//     console.log(`DB not connected ${error}`)
//    }
// }

// DB()

//API Creation

app.get("/", (req, res) => {
    res.send("Express App is Running")

})



// image storage engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload/images')
    },
    filename: function (req, file, cb) {

        return cb(null, `${file.fieldname}_${Date.now()}_${path.extname(file.originalname)}`)
    }
})

const upload = multer({ storage: storage })


//Creating upload endpoint 

app.use('/images', express.static('upload/images'))

app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})



// schema for Creating products

const Product = mongoose.model('Product', {
    id: {
        type: Number,
        require: true,

    },
    name: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true,

    },
    category: {
        type: String,
        require: true
    },
    new_price: {
        type: Number,
        require: true
    },
    old_price: {
        type: Number,
        require: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    avilable: {
        type: Boolean,
        default: true
    },
})


app.post('/addproduct', async (req, res) => {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
        let last_pro_array = products.slice(-1);
        console.log(last_pro_array);
        let last_pro = last_pro_array[0];
        console.log(last_pro);
        id = last_pro.id + 1;
    }
    else {
        id = 1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,

    })
    console.log(product);
    await product.save(); //using this it show the data in Mongodb automatically
    console.log("saved");
    res.json({
        success: true,
        name: req.body.name,
    })

})

// Api for deleting products...
app.post('/removeproducts', async (req, res) => {
    const dlt = await Product.findOneAndDelete({
        id: req.body.id,
    })
    console.log(dlt)
    console.log("removed")

    res.json({
        success: true,
        // name:req.body.name,
    })
})

// Creating a API endpoint to get  all product from Database

app.get('/allproduct', async (req, res) => {
    let products = await Product.find({});
    console.log("Data is fetched");
    res.send(products);

})

// for category wise data
app.get('/allproduct/:name', async (req, res) => {

    const name = req.params.name;
    console.log(name)
    let products = await Product.find({ category: name });
    console.log(products)
    console.log("Data is fetched");
    res.send(products);

})

// create mode for User singnup and login-----------------

const User = new mongoose.model("User", {
    username: {
        type: String,
        require: true

    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now,
    },
    cartdata: {
        type: Object,
    }
});

// create a API end  point for  singnup;
app.post("/signup", async (req, res) => {
    console.log("i am in")
    const check = await User.findOne({ email: req.body.email })
    // console.log(check)
    if (check) {
        res.status(200).json({ success: "false", existing: "alerady exist email please go and login" })
    }
    else {

        let cart = {}
        for (let index = 0; index < 300 + 1; index++) {
            cart[index] = 0;

        }
        console.log(cart)
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            cartdata: cart,
        })

        await user.save()

        const data = {
            user: {
                id: user._id
            }

        }

        // //  json web token
        const token = jwt.sign(data, "secret_ecom")

        res.json({ success: "true", token })
    }


})

//  endpoint of user login
app.post("/login", async (req, res) => {
    console.log("Login attempt", req.body);


    try {
        const userdata = await User.findOne({ email: req.body.email });
        console.log(userdata);

        if (userdata) {
            console.log(String(userdata.password))
            const passcheck = req.body.password === String(userdata.password);

            if (passcheck) {
                const data = {
                    userdata: {
                        id: userdata._id
                    }
                };

                // Generate JSON Web Token
                const token = jwt.sign(data, "secret_ecom", { expiresIn: '1h' });

                res.json({ success: "true", token });
            } else {
                res.json({ success: "false", error: "wrong password" });
            }
        } else {
            res.json({ success: "false", error: "wrong email" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: "false", error: "internal server error" });
    }
});





//  endpoint for newcollection.....

app.get("/Newcollection", async (req, res) => {

    let products = await Product.find({});
    const newcollection = products.slice(1, 5);
    console.log("Newcollection is fetched")
    res.send(newcollection)

})

// Api end point of popular in women

app.get("/popularinwomen", async (req, res) => {

    let products = await Product.find({ category: "women" });
    const popular_in_women = products.slice(0, 4);
    console.log("popular women is fetched")
    res.send(popular_in_women)

})

//-->midleware for fetchuser....

const fetchUser = async (req, res, next) => {
    console.log("token")
    const token = req.header('auth-token')

    if (!token) {
        res.status(401).send({ error: "dont have token for user" })
    }
    else {
        try {
            const data = jwt.verify(token, "secret_ecom");
            console.log(data)
            req.user = data.userdata
            console.log(req.user)
            next()
        } catch (error) {
            res.status(401).send({ errors: "You should authentication" })
        }
    }


}


// when user will input same data will be shown API end point
app.post("/addtocart", fetchUser, async (req, res) => {
    console.log(req.body, req.user);
    // console.log(token)
    const userdatas = await User.findOne({ _id: req.user.id });
    userdatas.cartdata[req.body.itemId] += 1
    await User.findOneAndUpdate({ _id: req.user.id }, { cartdata: userdatas.cartdata })
    res.json({ status: "ADDED" });
})

// for remove data when user login logout...
app.post("/removecartitem", fetchUser, async (req, res) => {
    console.log(req.body, req.user);
    const userdatas = await User.findOne({ _id: req.user.id });
    if (userdatas.cartdata[req.user.itemId] > 0)
        userdatas.cartdata[req.body.itemId] -= 1;
    await User.findOneAndUpdate({ _id: req.user.id }, { cartdata: userdatas.cartdata })
    res.json({ status: "subtract" })

})

// get cartitem
app.post("/getcartitem", fetchUser, async (req, res) => {
    // console.log(req.body,req.user)
    console.log("getData")
    const userdata = await User.findOne({ _id: req.user.id });

    res.json(userdata.cartdata)
}
)



app.listen(port, (error) => {
    if (!error) {
        console.log("Server Running on port :" + port);
    }
    else {
        console.log("Error:" + error);
    }
})






