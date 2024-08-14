

import path from "path";
import { JsonDb } from "..";


const socialMedia = new JsonDb("db", "social_media")


socialMedia.insert({ name: "Instagram", c: "Meta" }, (data: any, error: any) => {})
socialMedia.insert({ name: "YouTube", c: "Google" }, (data: any, error: any) => {})
socialMedia.insert({ name: "TikTok", c: "" }, (data: any, error: any) => {})
socialMedia.insert({ name: "FaceBook", c: "Meta" }, (data: any, error: any) => {})
socialMedia.insert({ name: "SnapChat", c: "" }, (data: any, error: any) => {})
socialMedia.insert({ name: "Twitter", c: "" }, (data: any, error: any) => console.log(data))

socialMedia.update({ name: "Twitter" }, { name: "X" }, false, (data: any, error: any) => {
    console.log(data)
})

socialMedia.find({ c: "Meta" }, (data: any, error: any) => console.log(data)) // Instagram and FaceBook
socialMedia.findOne({ c: "Google" }, (data: any, error: any) => console.log(data)) // YouTube

socialMedia.search({ name: "Y" }, (data: any, error: any) => console.log(data)) // YouTube

socialMedia.delete({ name: "Twitter" }, (data: any, error: any) => {})