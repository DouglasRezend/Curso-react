import './MyForm.css'

const MyForm = () => {
  return (
    <div>
        {/* 1 - criacao de form */}
        <form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text"  name="name" />
            </div>
        </form>
    </div>
  )
}

export default MyForm