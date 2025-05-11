import { useState } from "react"
import Input from '../components/input'
import Button from '../components/button'

interface FileFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onSave?: () => void
}
  
const FileForm : React.FC<FileFormProps> = ({ onSave }) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [file, setFile] = useState<File | null>(null)
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if(file == null || title == "" || description == "") return
        const formData = new FormData()
        formData.append('file', file)
        formData.append('title',title)
        formData.append('description',description)

        fetch('http://localhost:8000/api/files/', {
            method: 'POST',
            headers: {
                'Authorization': `Token ${localStorage.getItem('token') || ''}`
            },
            credentials: 'include',
            body: formData
          }).then(
            ()=>{
                setTitle("")
                setDescription("")
                setFile(null)
                if(onSave != null) onSave()           
            }           
          )
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
          setFile(e.target.files[0])
        }
      }
    return (
        <div style={{display:"block"}}>
            <h2>Novo Arquivo</h2>
        <form onSubmit={handleSubmit}>
            <Input
                type="text" 
                placeholder="Titulo *"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <Input
                type="textarea"
                placeholder="Descrição"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <Input type="file" onChange={handleFileChange} placeholder="Arquivo" required/>
            <Button type="submit">Salvar</Button>
        </form>
        </div>
    )
}

export default FileForm;