import './recipe.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { projectFirestore } from '../../firebase/config';

export default function Recipe() {
  const { id } = useParams()
  const {mode} = useTheme()

  const [recipe, setRecipe] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  const handleClick = () => {
    projectFirestore.collection('recipes').doc(id).update({
      title: 'Something Different'
    })
  }


  useEffect(() => {
    setIsPending(true)

    const unsub = projectFirestore.collection('recipes').doc(id).onSnapshot((doc) => {
      if (doc.exists) {
        setIsPending(false)
        setRecipe(doc.data())
      }
      else {
        setIsPending(false)
        setError("Couldn't find recipe")
      }
    })

    return () => unsub()
  }, [id])

  return (
  <div className={`recipe ${mode}`}>
    {isPending && < div className="loading">Loading...</div>}
    {error && <p className="error">{error}</p>}
    {recipe && (
      <>
      <h2 className="page-title">{recipe.title}</h2>
      <p>Takes {recipe.cookingTime} to cook.</p>
      <ul>
        {recipe.ingredients.map(ing => (<li key={ing}>{ing}</li>))}
      </ul>
      <p className="method"> {recipe.method}</p>
      <button
      onClick={() => handleClick()}>Update Me</button>

      </>
    )}
  </div>
  
  );
}
