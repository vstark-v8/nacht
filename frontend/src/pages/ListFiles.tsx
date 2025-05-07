import { useEffect, useState } from "react"
import LoadingComponent from "../components/loading"
import CardDownload from "../components/CardDownload"
import Header from "../components/header"
import Footer from "../components/footer"

type FileData = {
  title: string
  description: string
  url: string
}


function FileListPage() {
    const [token,setToken] = useState("")
    const [files, setFiles] = useState<FileData[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        const t = localStorage.getItem('token')
        setToken(t ?? "");
      }
    ,[])

    useEffect(() =>{
      if(token != "") getAllFiles();
    }
  ,[token])

    const getAllFiles =() => {
      fetch('http://localhost:8000/api/files/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        },
        credentials: 'include'
      }).then((response) => response.json())
      .then((data: FileData[]) => {
        setFiles(data)
        setLoading(false)
      })
    }
    return (
      <div>
        <Header></Header>
        {loading ? <LoadingComponent></LoadingComponent>:
        <div style={{top:75,left:0,position: 'fixed',display:'flex', flex:1,width:'100%'}}>
          {files.map(file => (
            <CardDownload
              title={file.title}
              description={file.description}
              url={file.url}
            />
      ))}
        </div>}
        <Footer></Footer>
      </div>
    )
  }
  
  export default FileListPage
  