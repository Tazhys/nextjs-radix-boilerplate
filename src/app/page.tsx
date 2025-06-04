"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const navigationComponents: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Dialog",
    href: "/docs/primitives/dialog",
    description: "A window overlaid on either the primary window or another dialog window.",
  },
  {
    title: "Context Menu",
    href: "/docs/primitives/context-menu",
    description: "Displays a menu to the user — such as a set of actions or functions — triggered by a button.",
  },
  {
    title: "Navigation Menu",
    href: "/docs/primitives/navigation-menu",
    description: "A collection of links for navigating websites.",
  },
  {
    title: "Select",
    href: "/docs/primitives/select",
    description: "Displays a list of options for the user to pick from—triggered by a button.",
  },
]

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

// Component Examples
const ButtonExample = () => (
  <div className="space-y-6">
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Button Variants</h3>
      <div className="flex flex-wrap gap-3">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    </div>
    
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Button Sizes</h3>
      <div className="flex items-center gap-3">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </div>
    </div>

    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Button States</h3>
      <div className="flex flex-wrap gap-3">
        <Button>Normal</Button>
        <Button disabled>Disabled</Button>
        <Button className="loading">
          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading
        </Button>
      </div>
    </div>
  </div>
)

const DialogExample = () => (
  <div className="space-y-6">
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Profile Settings Dialog</h3>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">Username</Label>
              <Input id="username" defaultValue="@peduarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">Email</Label>
              <Input id="email" defaultValue="pedro@example.com" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="bio" className="text-right">Bio</Label>
              <Input id="bio" placeholder="Tell us about yourself" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>

    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Confirmation Dialog</h3>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">Delete Project</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your project
              "My Awesome App" and remove all associated data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-red-600 hover:bg-red-700">
              Yes, delete project
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  </div>
)

const ContextMenuExample = () => (
  <div className="space-y-6">
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">File Manager Context Menu</h3>
      <ContextMenu>
        <ContextMenuTrigger className="flex h-32 w-full items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 dark:bg-gray-800 dark:border-gray-600">
          <div className="text-center">
            <div className="text-lg">📁</div>
            <div className="text-sm text-muted-foreground mt-1">Right-click for options</div>
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuItem inset>
            <span>📄 New File</span>
          </ContextMenuItem>
          <ContextMenuItem inset>
            <span>📁 New Folder</span>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuSub>
            <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>
                <span>🔍 Search Files</span>
              </ContextMenuItem>
              <ContextMenuItem>
                <span>📊 Properties</span>
              </ContextMenuItem>
              <ContextMenuItem>
                <span>🗂️ Archive</span>
              </ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem inset>
            <span>📋 Copy</span>
          </ContextMenuItem>
          <ContextMenuItem inset>
            <span>📄 Paste</span>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem inset className="text-red-600">
            <span>🗑️ Delete</span>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>

    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Image Context Menu</h3>
      <ContextMenu>
        <ContextMenuTrigger className="flex h-32 w-full items-center justify-center rounded-lg border bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900">
          <div className="text-center">
            <div className="text-2xl">🖼️</div>
            <div className="text-sm text-muted-foreground mt-1">Right-click this image</div>
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-48">
          <ContextMenuItem inset>Save Image</ContextMenuItem>
          <ContextMenuItem inset>Copy Image</ContextMenuItem>
          <ContextMenuItem inset>Copy Image Address</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem inset>Open in New Tab</ContextMenuItem>
          <ContextMenuItem inset>Inspect Element</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  </div>
)

const SelectExample = () => (
  <div className="space-y-6">
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">User Preferences</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="theme">Theme</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Appearance</SelectLabel>
                <SelectItem value="light">🌞 Light</SelectItem>
                <SelectItem value="dark">🌙 Dark</SelectItem>
                <SelectItem value="system">💻 System</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="language">Language</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Languages</SelectLabel>
                <SelectItem value="en">🇺🇸 English</SelectItem>
                <SelectItem value="es">🇪🇸 Spanish</SelectItem>
                <SelectItem value="fr">🇫🇷 French</SelectItem>
                <SelectItem value="de">🇩🇪 German</SelectItem>
                <SelectItem value="zh">🇨🇳 Chinese</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="timezone">Timezone</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Americas</SelectLabel>
                <SelectItem value="est">Eastern Time (EST)</SelectItem>
                <SelectItem value="cst">Central Time (CST)</SelectItem>
                <SelectItem value="mst">Mountain Time (MST)</SelectItem>
                <SelectItem value="pst">Pacific Time (PST)</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Europe</SelectLabel>
                <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                <SelectItem value="cet">Central European Time (CET)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="notifications">Notifications</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Notification preference" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">🔔 All notifications</SelectItem>
              <SelectItem value="important">⚠️ Important only</SelectItem>
              <SelectItem value="none">🔕 None</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  </div>
)

const FormExample = () => (
  <div className="space-y-6">
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Contact Form</h3>
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="John" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Doe" />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="john.doe@example.com" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">General Inquiry</SelectItem>
              <SelectItem value="support">Technical Support</SelectItem>
              <SelectItem value="billing">Billing Question</SelectItem>
              <SelectItem value="feedback">Feedback</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Input id="message" placeholder="How can we help you?" className="min-h-[80px]" />
        </div>

        <Button type="submit" className="w-full">Send Message</Button>
      </form>
    </div>
  </div>
)

const TypographyExample = () => (
  <div className="space-y-8">
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Typography Scale</h3>
      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          The Joke Tax Chronicles
        </h1>
        <p className="text-xl text-muted-foreground">
          A collection of tax jokes and puns for the modern accountant.
        </p>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Chapter 1: The Basics
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Taxation is a critical aspect of any society's functioning, providing the necessary funds for public services, infrastructure, and governance. However, it's also a source of complexity and, dare we say, humor.
        </p>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Why do we pay taxes?
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Well, apart from it being the law, taxes fund essential services like education, healthcare, and that pothole outside your house that's been there for three years.
        </p>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          "The only things certain in life are death and taxes." - Benjamin Franklin
        </blockquote>
      </div>
    </div>

    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Text Styles</h3>
      <div className="space-y-3">
        <p className="text-sm text-muted-foreground">Small muted text for captions and notes</p>
        <p className="text-base">Regular paragraph text for body content</p>
        <p className="text-lg">Large text for emphasis</p>
        <p className="font-bold">Bold text for strong emphasis</p>
        <p className="italic">Italic text for citations and quotes</p>
        <p className="underline">Underlined text for links</p>
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          Code snippets look like this
        </code>
      </div>
    </div>

    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Lists & Tables</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium mb-2">Unordered List</h4>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Design System Components</li>
            <li>Accessible by default</li>
            <li>Customizable themes</li>
            <li>Built with TypeScript</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">Ordered List</h4>
          <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
            <li>Install dependencies</li>
            <li>Configure your project</li>
            <li>Add components</li>
            <li>Build amazing apps</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
)

export default function Home() {
  const [selectedExample, setSelectedExample] = React.useState("buttons")

  const examples = {
    buttons: { title: "Buttons", component: <ButtonExample /> },
    dialogs: { title: "Dialogs & Alerts", component: <DialogExample /> },
    contextmenu: { title: "Context Menus", component: <ContextMenuExample /> },
    select: { title: "Select Components", component: <SelectExample /> },
    forms: { title: "Forms", component: <FormExample /> },
    typography: { title: "Typography", component: <TypographyExample /> },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {navigationComponents.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/docs">Documentation</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/examples">Examples</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            shadcn/ui Component Examples
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Explore interactive examples of beautifully designed components. Select a component category below to see detailed demonstrations.
          </p>
        </div>

        {/* Example Selector */}
        <Card className="max-w-md mx-auto">
          <CardHeader className="text-center">
            <CardTitle>Choose an Example</CardTitle>
            <CardDescription>
              Select a component category to explore
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Select value={selectedExample} onValueChange={setSelectedExample}>
              <SelectTrigger>
                <SelectValue placeholder="Select an example" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Component Examples</SelectLabel>
                  {Object.entries(examples).map(([key, { title }]) => (
                    <SelectItem key={key} value={key}>
                      {title}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Selected Example */}
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">
              {examples[selectedExample as keyof typeof examples].title}
            </CardTitle>
            <CardDescription>
              Interactive examples and demonstrations
            </CardDescription>
          </CardHeader>
          <CardContent>
            {examples[selectedExample as keyof typeof examples].component}
          </CardContent>
        </Card>

        {/* Quick Links */}
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Learn More</CardTitle>
            <CardDescription>
              Explore the full potential of shadcn/ui and Next.js
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <a 
                  href="https://ui.shadcn.com/docs/components" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors h-full"
                >
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">Components</h3>
                    <p className="text-sm text-muted-foreground">
                      Browse all available components and copy-paste them into your project
                    </p>
                  </div>
                </a>
              </div>
              
              <div className="group">
                <a 
                  href="https://ui.shadcn.com/docs/installation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors h-full"
                >
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">Installation</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn how to install and configure shadcn/ui in your project
                    </p>
                  </div>
                </a>
              </div>
              
              <div className="group">
                <a 
                  href="https://nextjs.org/docs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors h-full"
                >
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">Next.js Docs</h3>
                    <p className="text-sm text-muted-foreground">
                      Deep dive into Next.js features and best practices
                    </p>
                  </div>
                </a>
              </div>
              
              <div className="group">
                <a 
                  href="https://tailwindcss.com/docs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors h-full"
                >
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">Tailwind CSS</h3>
                    <p className="text-sm text-muted-foreground">
                      Explore utility-first CSS framework documentation
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
