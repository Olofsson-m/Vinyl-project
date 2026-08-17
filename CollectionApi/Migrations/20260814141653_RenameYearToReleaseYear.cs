using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CollectionApi.Migrations
{
    /// <inheritdoc />
    public partial class RenameYearToReleaseYear : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Year",
                table: "VinylRecords",
                newName: "ReleaseYear");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ReleaseYear",
                table: "VinylRecords",
                newName: "Year");
        }
    }
}
