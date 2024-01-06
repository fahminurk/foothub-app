import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { UseMutateAsyncFunction } from "@tanstack/react-query";
import { AxiosError } from "axios";

interface DeleteAlertProps {
  id: number;
  mutateAsync: UseMutateAsyncFunction<
    any,
    AxiosError<{ message: string }>,
    number,
    unknown
  >;
  isPending: boolean;
}

const DeleteAlert: React.FC<DeleteAlertProps> = ({
  id,
  mutateAsync,
  isPending,
}) => {
  const [open, setOpen] = useState(false);

  const deleteHandler = async () => {
    try {
      await mutateAsync(id);
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button
        size={"xs"}
        variant={"destructive"}
        onClick={() => setOpen(!open)}
      >
        Delete
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure want delete ?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant={"destructive"}
            onClick={deleteHandler}
            disabled={isPending}
          >
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteAlert;
