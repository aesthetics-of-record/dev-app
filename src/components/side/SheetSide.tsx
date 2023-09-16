'use client';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '../ui/button';
import LeftSidebar from './LeftSidebar';

const SheetSide = () => {
  return (
    <Sheet key={'left'}>
      <SheetTrigger asChild>
        <Button variant="outline">left</Button>
      </SheetTrigger>
      <SheetContent side={'left'}>
        <LeftSidebar />
      </SheetContent>
    </Sheet>
  );
};

export default SheetSide;
