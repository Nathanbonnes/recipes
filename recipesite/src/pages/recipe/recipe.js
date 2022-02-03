import './recipe.css'
import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';

export default function Recipe() {
  const { id } = useParams()
  const url = `http://localhost:3000/recipes/` + id 
  const {error, isPending, data: recipe} = useFetch(url)

  const {mode} = useTheme()

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

  
      </>
    )}
  </div>
  
  );
}
