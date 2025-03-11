import { MainHeader } from "@/components/main-header";

export default function CssPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <MainHeader />
      <main className="flex-1 p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-black border-b pb-2">CSS Box Model</h1>
        
        <p className="mb-6 text-gray-800">
          The CSS Box Model is a fundamental concept that describes how elements are rendered on a webpage.
          Every HTML element is treated as a rectangular box with content, padding, border, and margin areas.
        </p>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Box Model Components</h2>
          <div className="space-y-4">
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Content</h3>
              <p className="text-sm text-gray-600">The actual content of the element (text, images, etc.)</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">width: 300px; height: 200px;</code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Padding</h3>
              <p className="text-sm text-gray-600">Clear space around the content, inside the border</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">padding: 20px; padding-left: 10px;</code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Border</h3>
              <p className="text-sm text-gray-600">A border that goes around the padding and content</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">border: 1px solid black; border-radius: 5px;</code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Margin</h3>
              <p className="text-sm text-gray-600">Clear space outside the border, separating the element from other elements</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">margin: 10px; margin-top: 20px;</code>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Box Sizing Properties</h2>
          <div className="space-y-4">
            <div className="border rounded-md p-4">
              <h3 className="font-bold">content-box (Default)</h3>
              <p className="text-sm text-gray-600">Width and height only apply to content area; padding and border are added to the total size</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">box-sizing: content-box;</code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">border-box</h3>
              <p className="text-sm text-gray-600">Width and height include content, padding, and border</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">box-sizing: border-box;</code>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Shorthand Properties</h2>
          <div className="space-y-4">
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Padding Shorthand</h3>
              <p className="text-sm text-gray-600">Specify all padding sides in a single declaration</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">padding: 10px 15px 20px 25px; /* top right bottom left */</code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Margin Shorthand</h3>
              <p className="text-sm text-gray-600">Specify all margin sides in a single declaration</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">margin: 10px 15px; /* top/bottom left/right */</code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Border Shorthand</h3>
              <p className="text-sm text-gray-600">Specify border width, style, and color in a single declaration</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">border: 2px dashed #333;</code>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-4 text-black">Box Model Calculations</h2>
          <div className="space-y-4">
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Total Element Width</h3>
              <p className="text-sm text-gray-600">How to calculate the total width an element occupies</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                Total Width = width + padding-left + padding-right + border-left + border-right + margin-left + margin-right
              </code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Total Element Height</h3>
              <p className="text-sm text-gray-600">How to calculate the total height an element occupies</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                Total Height = height + padding-top + padding-bottom + border-top + border-bottom + margin-top + margin-bottom
              </code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Collapsing Margins</h3>
              <p className="text-sm text-gray-600">When vertical margins of two elements are adjacent, they collapse to the larger value</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                /* If element1 has margin-bottom: 20px and element2 has margin-top: 30px */
                /* The space between them will be 30px, not 50px */
              </code>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}