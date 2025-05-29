import { createClient } from "@supabase/supabase-js"

const url = "https://hkbxhgcjdyzzdujnzino.supabase.co"
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrYnhoZ2NqZHl6emR1am56aW5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0NDQ5MTksImV4cCI6MjA2NDAyMDkxOX0.cHjXSu1ghsj-mnbqoSj8dWkyCY-zK07VZaHHRdW41tc"

const supabase = createClient(url,key)


export default function mediaUpload(file){

    const mediaUploadPromise = new Promise(
        (resolve, reject)=>{

            if(file == null){
                reject("No file selected")
                return
            }

            const timestamp = new Date().getTime()
            const newName = timestamp+file.name

            supabase.storage.from("images").upload(newName, file, {
                upsert:false,
                cacheControl:"3600"
            }).then(()=>{

                const publicUrl = supabase.storage.from("images").getPublicUrl(newName).data.publicUrl
                resolve(publicUrl)

            }).catch(
                (e)=>{
                    reject("Error occured in supabase connection")
                }
            )

        }
    )

    return mediaUploadPromise

}