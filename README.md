Vinyl Collection API (.NET 9)
En modern RESTful Web API byggd med .NET 9 som hanterar vinylskivor och deras ägare. Projektet följer god praxis med Entity Framework Core för databashantering, migrations och en renodlad arkitektur med Controllers, Services och DTO:er.

🛠️ Teknikstack & Verktyg
Platform: .NET 9 (C#)

Arkitektur: ASP.NET Core Web API

Databas & ORM: Entity Framework Core (med stöd för SQLite/relationell databas)

Containerisering: Docker (används för databashantering/miljö)

Arkitektoniska mönster: Repository/Service-mönster med DTO-mappning.

📁 Projektstruktur
Plaintext
CollectionApi/
│
├── Controllers/         # API-endpoints (t.ex. VinylController.cs)
├── Data/                # Databaskontext (AppDbContext.cs)
├── DTOs/                # Data Transfer Objects för in- och utdata
├── Migrations/          # EF Core-migreringar (hantering av databasschema)
├── Models/              # Domänmodeller (VinylRecord, VinylOwner)
├── Services/            # Affärslogik (IVinylService, VinylService)
├── Properties/          # Inställningar (launchSettings.json)
├── appsettings.json     # Konfigurationsfiler
├── CollectionApi.http   # HTTP-anrop för testning direkt i IDE (t.ex. VS Code/Rider)
└── Program.cs           # Applikationens startpunkt och DI-konfiguration


🚀 Kom igång (Installation & Körning)
Förutsättningar
.NET 9 SDK installerat på maskinen.

Valfri IDE (t.ex. Visual Studio, VS Code eller JetBrains Rider).

1. Klona repositoryt och navigera till mappen
Bash
cd CollectionApi/CollectionApi
2. Konfigurera databasen (Migrations)
Säkerställ att databasen är uppdaterad med de senaste migreringarna:

Bash
dotnet ef database update
3. Starta applikationen
Bash
dotnet run
API:et startar nu lokalt (vanligtvis på https://localhost:xxxx eller http://localhost:xxxx).

🔍 API-endpoints & Testning
Du kan testa anropen direkt i din utvecklingsmiljö via filen CollectionApi.http som finns med i projektet.

Standard-endpoints finns tillgängliga via VinylController för att hämta, lägga till, uppdatera och radera vinylskivor och relaterad information.

📋 Migreringshistorik
Projektet har hittills spårat följande centrala databasförändringar via EF Core:

InitialCreate – Grundläggande tabellstrukturer för skivor och ägare.

RenameYearToReleaseYear – Uppdatering av datamodellen för att spegla utgivningsår (ReleaseYear).
