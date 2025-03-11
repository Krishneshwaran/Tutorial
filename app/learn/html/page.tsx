import { MainHeader } from "@/components/main-header";

export default function HtmlPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <MainHeader />
      <main className="flex-1 p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-black border-b pb-2">HTML Attributes</h1>
        
        <p className="mb-6 text-gray-800">
          HTML attributes provide additional information about HTML elements and are always specified in 
          the start tag. Attributes usually come in name/value pairs like: name="value".
        </p>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Global Attributes</h2>
          <div className="space-y-4">
            <div className="border rounded-md p-4">
              <h3 className="font-bold">class</h3>
              <p className="text-sm text-gray-600">Specifies one or more classnames for an element</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">&lt;div class="container main-content"&gt;</code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">id</h3>
              <p className="text-sm text-gray-600">Specifies a unique id for an element</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">&lt;div id="header"&gt;</code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">style</h3>
              <p className="text-sm text-gray-600">Specifies an inline CSS style for an element</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">&lt;p style="color:blue; margin-left:20px;"&gt;</code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">title</h3>
              <p className="text-sm text-gray-600">Specifies extra information about an element (displayed as a tooltip)</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">&lt;p title="Important information"&gt;Hover over me&lt;/p&gt;</code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">data-*</h3>
              <p className="text-sm text-gray-600">Used to store custom data private to the page or application</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">&lt;div data-user-id="123" data-role="admin"&gt;</code>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Form Attributes</h2>
          <div className="space-y-4">
            <div className="border rounded-md p-4">
              <h3 className="font-bold">type</h3>
              <p className="text-sm text-gray-600">Specifies the type of input element to display</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">&lt;input type="text"&gt;</code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">value</h3>
              <p className="text-sm text-gray-600">Specifies the value of an input element</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">&lt;input type="text" value="John"&gt;</code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">placeholder</h3>
              <p className="text-sm text-gray-600">Specifies a hint that describes the expected value</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">&lt;input type="text" placeholder="Enter your name"&gt;</code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">required</h3>
              <p className="text-sm text-gray-600">Specifies that the input field must be filled before submitting</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">&lt;input type="text" required&gt;</code>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Media Attributes</h2>
          <div className="space-y-4">
            <div className="border rounded-md p-4">
              <h3 className="font-bold">src</h3>
              <p className="text-sm text-gray-600">Specifies the URL of the media file</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">&lt;img src="image.jpg"&gt;</code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">alt</h3>
              <p className="text-sm text-gray-600">Specifies an alternate text for an image</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">&lt;img src="image.jpg" alt="Description of image"&gt;</code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">width</h3>
              <p className="text-sm text-gray-600">Specifies the width of an element</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">&lt;img src="image.jpg" width="500"&gt;</code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">height</h3>
              <p className="text-sm text-gray-600">Specifies the height of an element</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">&lt;img src="image.jpg" height="300"&gt;</code>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-4 text-black">Link Attributes</h2>
          <div className="space-y-4">
            <div className="border rounded-md p-4">
              <h3 className="font-bold">href</h3>
              <p className="text-sm text-gray-600">Specifies the URL of the page the link goes to</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">&lt;a href="https://www.example.com"&gt;</code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">target</h3>
              <p className="text-sm text-gray-600">Specifies where to open the linked document</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">&lt;a href="https://www.example.com" target="_blank"&gt;</code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">rel</h3>
              <p className="text-sm text-gray-600">Specifies the relationship between current document and linked document</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">&lt;a href="https://www.example.com" rel="nofollow"&gt;</code>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}