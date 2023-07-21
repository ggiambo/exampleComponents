import { useState } from "react"

const Language = ({name}) => {
    const [likes, setLikes] = useState(0);
    return (
        <div>
            <h3>{name}</h3>
            <button onClick={() => setLikes(likes + 1)} >+</button>
            <button onClick={() => setLikes(likes - 1)} >-</button>
            Likes: {likes}
        </div>
    )
}

export default Language;