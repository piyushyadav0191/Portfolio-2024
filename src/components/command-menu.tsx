"use client";

import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandMedium,
  IconCode,
  IconCommand,
  IconLink,
} from "@tabler/icons-react";
import React from "react";
import { toast } from "sonner";

import {
  Button,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui";

/**
 * An array of groups, where each group has a name and an array of actions.
 */
type Groups = Array<{
  /**
   * The name of the group.
   */
  name: string;
  /**
   * An array of actions.
   */
  actions: Array<{
    /**
     * The title of the action.
     */
    title: string;
    /**
     * The icon of the action.
     */
    icon: React.ReactNode;
    /**
     * The callback to run when the action is selected.
     */
    onSelect: () => void | Promise<void>;
  }>;
}>;

const CommandMenu = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((value) => !value);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const openLink = React.useCallback((url: string) => {
    setOpen(false);
    window.open(url, "_blank", "noopener");
  }, []);

  const groups: Groups = [
    {
      name: "General",
      actions: [
        {
          title: "Copy Link",
          icon: <IconLink size={16} className="mr-2" />,
          onSelect: async () => {
            setOpen(false);

            if (!navigator?.clipboard) {
              toast.error("Access to clipboard rejected!");
            }

            try {
              await navigator.clipboard.writeText(window.location.href);
              toast.success(
                <div className="flex flex-col">
                  <div>Copied</div>
                  <div className="text-sm text-muted-foreground">
                    You can now share it with anyone.
                  </div>
                </div>
              );
            } catch {
              toast.error("Failed to copy!");
            }
          },
        },
        {
          title: "Source code",
          icon: <IconCode size={16} className="mr-2" />,
          onSelect: () =>
            openLink("https://github.com/piyushyadav0191/heypiyush"),
        },
      ],
    },
    {
      name: "Social",
      actions: [
        {
          title: "GitHub",
          icon: <IconBrandGithub size={16} className="mr-2" />,
          onSelect: () => openLink("https://github.com/piyushyadav0191"),
        },
        {
          title: "Instagram",
          icon: <IconBrandInstagram size={16} className="mr-2" />,
          onSelect: () => openLink("https://instagram.com/piyush.0191/"),
        },
        {
          title: "Medium",
          icon: <IconBrandMedium size={16} className="mr-2" />,
          onSelect: () => openLink("https://medium.com/@piyushyadav0191"),
        },
        {
          title: "LinkedIn",
          icon: <IconBrandLinkedin size={16} className="mr-2" />,
          onSelect: () =>
            openLink("https://www.linkedin.com/in/piyushyadav0191"),
        },
      ],
    },
  ];

  return (
    <>
      <Button
        variant="ghost"
        className="flex h-9 w-9 items-center justify-center p-0"
        onClick={() => setOpen(true)}
        type="button"
        aria-label="Open Command Menu"
      >
        <IconCommand size={20} />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {groups.map((group, i) => (
            <React.Fragment key={group.name}>
              <CommandGroup heading={group.name}>
                {group.actions.map((action) => (
                  <CommandItem key={action.title} onSelect={action.onSelect}>
                    {action.icon}
                    {action.title}
                  </CommandItem>
                ))}
              </CommandGroup>
              {i !== groups.length - 1 && <CommandSeparator />}
            </React.Fragment>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default CommandMenu;
