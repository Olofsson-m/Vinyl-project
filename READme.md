# OBS! WORK IN PROGRESS

# Vinyl Project

## Projektöversikt

Vinyl Project är en fullstack-applikation för att hantera en samling vinylskivor. Lösningen består av ett backend-API i ASP.NET Core och ett frontend-gränssnitt i React. Målet är att kunna skapa, läsa, uppdatera och administrera poster för vinylskivor på ett strukturerat och användarvänligt sätt.

## Arkitektur i korthet

- Backend: CollectionApi (ASP.NET Core, .NET 9)
- Frontend: vinyl-ui (React + Vite)
- Databasåtkomst: Entity Framework Core via AppDbContext
- API-lager: Controllers + Services + DTOs

## Backend (CollectionApi)

Backend-projektet ansvarar för affärslogik, datalagring och exponering av REST-endpoints.

Viktiga delar:

- Controllers: API-endpoints, till exempel VinylController
- Services: Affärslogik i IVinylService och VinylService
- Data: Databaskonfiguration i AppDbContext
- Models: Domänmodeller som VinylRecord och VinylOwner
- DTOs: Svarskontrakt, till exempel VinylResponseDto
- Migrations: Versionshantering av databasschema

## Frontend (vinyl-ui)

Frontend-projektet ansvarar för användarupplevelsen och kommunicerar med backend-API:t.

Viktiga delar:

- pages: Sidkomponenter som HomePage, VinylList, AddVinyl och EditVinyl
- components: Återanvändbara UI-komponenter, till exempel VinylCard och VinylForm
- api: Anrop mot backend i VinylApi
- hooks: Plats för återanvändbar klientlogik

## Typiskt dataflöde

1. Användaren interagerar med gränssnittet i React.
2. Frontend skickar HTTP-anrop via api/VinylApi.
3. Backend tar emot anrop i VinylController.
4. Controller delegerar logik till VinylService.
5. Service använder AppDbContext för att läsa/skriva data.
6. API returnerar DTO-svar till frontend.

## Projektets styrkor

- Tydlig separation mellan presentation, API och affärslogik
- Skalbar mappstruktur för vidareutveckling
- EF Core-migreringar som stöd för kontrollerad schemautveckling
- Komponentbaserat frontend-upplägg med tydliga sidor och återanvändning

## Förslag på nästa steg

- Lägg till autentisering och behörighetsnivåer
- Utöka validering i både API och formulär
- Implementera testsvit för services och kritiska API-endpoints
- Dokumentera API-kontrakt (exempelvis med OpenAPI/Swagger-exempel)
- Implementering av services
- Utveckla DTOs för respons till frontend
