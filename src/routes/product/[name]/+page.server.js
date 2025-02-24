import fs from 'fs'
export async function load({params}) {
    const data = JSON.parse(fs.readFileSync(`content/${params.name}.json`, 'utf-8'))
 return data    
}