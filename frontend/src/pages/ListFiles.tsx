import { useEffect, useState } from "react"
import LoadingComponent from "../components/loading"
import CardDownload from "../components/CardDownload"
import Header from "../components/header"
import Footer from "../components/footer"
import SearchInput from "../components/searchInput"
import Button from "../components/button"
import Modal from "../components/modal"
import { FiUpload } from "react-icons/fi"
import FileForm from "./FileForm"

type FileData = {
  id:number
  title: string
  description: string
  file: string
}

function FileListPage() {
    const [token,setToken] = useState("")
    const [files, setFiles] = useState<FileData[]>([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState("")
    const [showModal,setShowModal] = useState(false)
    useEffect(() =>{
        const t = localStorage.getItem('token')
        setToken(t ?? "");
      }
    ,[])

    useEffect(() =>{
      if(token != "") getAllFiles();
    }
  ,[token])

    const handleSave = () => {
      getAllFiles()
      setShowModal(false)
    }

    const getAllFiles =() => {
      let url = 'http://localhost:8000/api/files/';
      
      if(search != "") url += `?search=${search}`
      fetch(url, {
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
        <div style={{top:75,left:0,position: 'fixed',display:'flex', flex:1,width:'100%', flexDirection:"column"}}>
          <div style={{display:'flex', flexDirection:'row'}}>
          <SearchInput
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              onSearch={()=>{ getAllFiles()}}
            />

            <div style={{
                borderRadius: '1rem',
                margin: '1rem',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                display:'flex'
              }}>
            <Button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={()=>{setShowModal(true)}}>
              <FiUpload size={15} />
            </Button>
            </div>
          </div>
          {files.map(file => (
            <CardDownload key={file.id}
              title={file.title}
              description={file.description}
              url={file.file}
            />
      ))}
        </div>}
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <FileForm onSave={handleSave}/>
        </Modal>
        <Footer></Footer>
      </div>
    )
  }
  
  export default FileListPage
  