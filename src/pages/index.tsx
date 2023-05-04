export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello, world!
      </h1>
      <h1 className="bg-green-600 text-white border-4 border-green-600">
        Hello, world!
      </h1>
      <h1 className="border-4 border-vuejs-932">
        Hello, world!
      </h1>
      <h1 className="text-yellow-600">
        Hello, world!
      </h1>
      <p className="text-xs sm:text-base md:text-lg lg:text-3xl mb-1">
        Hello long sentence
      </p>
      <p className="mt-[1rem] bg-[#bad455]">
        Another long sentence
      </p>

      <h1 className="text-3xl">
        Title 1
      </h1>
      <h2 className="text-2xl">
        Title 2
      </h2>
      <h3 className="text-xl">
        Title 3
      </h3>
      <p className="text-base leading-normal underline decoration-red-500 decoration-wavy decoration-1 underline-offset-4 uppercase">
        A regular paragraph
      </p>
      <p className="text-sm">
        A description paragraph
      </p>
      <p className="text-xs note">
        A little note
      </p>

      <div>
        <p className="truncate">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus maxime consectetur architecto similique eaque soluta, enim facere modi iste expedita ipsa. Rerum eligendi molestiae fugiat cupiditate fuga est itaque commodi.
        </p>
        <p className="break-all">
          Lorem ipsum dolor, pneumonoultramicroscopicsilicovolcanoconiosis sit amet consectetur adipisicing elit. Quo, accusantium debitis. Rerum aliquid, eligendi adipisci hic laborum fuga esse placeat. Porro rerum fugiat reprehenderit debitis iusto ipsam nobis. Inventore, unde?
        </p>
      </div>

      <div className="bg-blue-500 my-4">
        box with margin
      </div>
      <div className="bg-red-500 px-4">
        box with padding
      </div>

      <h1 className="font-bold text-2xl mb-2">
        This is my title
      </h1>
      <p>
        This is my paragraph
      </p>

      <div className="bg-blue-500 h-16 w-36 opacity-20" />
      <div className="bg-red-300 -mt-8 mb-2">
        -mt-8
      </div>

      <div className="flex min-h-screen space-x-4">
        <div className="w-1/5 bg-red-500">
          Sidebar
        </div>
        <div className="w-4/5 bg-green-500">
          Main content
        </div>
      </div>

      <h1 className="mb-4">
        First title
      </h1>
      <h2 className="mb-3">
        Second title
      </h2>
      <h3 className="mb-2">
        Third title
      </h3>
      <p className="mb-1">
        paragraph
      </p>

      <div className="Parent">
        <div>Header</div>
        <div className="flex flex-row">
          <div className="grow">Main content</div>
          <div className="flex flex-col">
            <div>Sidebar</div>
            <div>Menu</div>
          </div>
        </div>
      </div>

      <div className="Parent">
        <div>Header</div>
        <div className="flex">
          <div className="basis-4/12">Sidebar</div>
          <div className="basis-6/12">Main content</div>
          <div className="basis-2/12">Another Sidebar</div>
        </div>
      </div>

      <div className="Parent">
        <div>Header</div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-32 bg-sky-500">Sidebar</div>
          <div className="w-full bg-red-600">Main content</div>
        </div>
      </div>

      <div className="Parent">
        <div>Header</div>
        <div className="flex flex-wrap w-full">
          <div className="w-32 grow">01</div>
          <div className="w-32 grow">02</div>
          <div className="w-32 grow">03</div>
          <div className="w-32 grow">04</div>
          <div className="w-32 grow">05</div>
        </div>
      </div>

      <div className="Parent">
        <div>Header</div>
        <div className="flex items-center justify-evenly">
          <div>Sidebar</div>
          <div>
            <h1>Main content</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere unde commodi accusantium atque delectus placeat reiciendis eius eaque provident, fugit asperiores omnis deleniti, veniam porro explicabo? Repudiandae facilis modi aperiam.
            </p>
          </div>
          <div>Another sidebar</div>
        </div>
      </div>
    </div>
  )
}
