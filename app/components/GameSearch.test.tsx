import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameSearch from "./GameSearch";

const mockGames = [
  {
    id: 1,
    slug: "test-one",
    title: "Test Game One",
    price: 20,
    image: "/games/test.jpg",
    genres: ["Action"],
    isTop: false,
    createdAt: new Date(),
  },
  {
    id: 2,
    slug: "test-two",
    title: "Test Game Two",
    price: 22,
    image: "/games/test2.jpg",
    genres: ["Shooter"],
    isTop: false,
    createdAt: new Date(),
  },
];

describe("GameSearch", () => {
  it("Render all games", () => {
    render(<GameSearch games={mockGames} />);
    expect(screen.getByText("Test Game One")).toBeInTheDocument();
  });
  it("Filter games", async () => {
    const user = userEvent.setup();
    render(<GameSearch games={mockGames} />);
    const input = screen.getByPlaceholderText("მოძებნე თამაში...");
    await user.type(input, "One");
    expect(screen.getByText("Test Game One")).toBeInTheDocument();
    expect(screen.queryByText("Test Game Two")).not.toBeInTheDocument();
  });
  it("Empty State", async () => {
    const user = userEvent.setup();
    render(<GameSearch games={mockGames} />);
    const input = screen.getByPlaceholderText("მოძებნე თამაში...");
    await user.type(input, "zzz");
    expect(screen.getByText("თამაში ვერ მოიძებნა")).toBeInTheDocument();
  });
  it("Shows all games when the search is empty", async () => {
    const user = userEvent.setup();
    render(<GameSearch games={mockGames} />);
    const input = screen.getByPlaceholderText("მოძებნე თამაში...");
    await user.type(input, "One");
    const button = screen.getByLabelText("Clear search");
    await user.click(button);
    expect(screen.getByText("Test Game One")).toBeInTheDocument();
    expect(screen.getByText("Test Game Two")).toBeInTheDocument();
  });
});
