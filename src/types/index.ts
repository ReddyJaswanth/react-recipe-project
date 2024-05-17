export type RecipeType = {

    id: number,
    name: string,
    image: string,
    mealType: Array<string>,
    cuisine: string,
    difficulty:string,
    ingredients: Array<string>,
    instructions: Array<string>,
    rating: number,
    reviewCount: number,
    servings: string,
    prepTimeMinutes: string,
    cookTimeMinutes: string,
}