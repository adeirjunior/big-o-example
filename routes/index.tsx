import Info from "../components/info.tsx";
import Search from "./../components/search.tsx";
import Table from "./../components/table.tsx";

export default function Home() {
  return (
    <>
      <h1 class="text-center mt-8 text-2xl">Big O Notation</h1>

      <section class="px-4 py-8 mx-auto space-y-4 max-w-2xl">

        <Search />
      </section>
      <section class="px-4 py-8 mx-auto space-y-4 max-w-4xl">
        <div class="grid grid-cols-3 gap-4">
          <Table />
          <Table />
          <Table />
        </div>
      </section>
      <Info/>
    </>
  );
}
