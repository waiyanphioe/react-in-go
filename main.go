package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/template/html"
)

func main() {

	// Load templates
	engine := html.New("./", ".html")

	// Create app
	app := fiber.New(fiber.Config{
		Views: engine,
	})

	// Configure app
	app.Static("/", "./public")

    app.Get("/", func(c *fiber.Ctx) error {
        return c.Render("index",fiber.Map{})
    })

    app.Listen(":3000")
}