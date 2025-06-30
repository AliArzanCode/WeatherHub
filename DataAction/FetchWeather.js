"use server"

export async function fetchweather(city) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric`
    )

    if (!res.ok) throw new Error("Failed to fetch weather")

    const data = await res.json()
    return data
  } catch (error) {
    console.log("Error fetching weather:", error)
    return { cod: "500", message: "Something went wrong" }
  }
}