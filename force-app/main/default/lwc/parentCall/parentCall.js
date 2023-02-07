import { LightningElement } from 'lwc';

export default class ParentCall extends LightningElement {

    countvalue=0;
    startcounter=0;

    handelsubtract()
    {
this.countvalue--;

    }

    handeladd()

    {

        this.countvalue++;
    }
    handelmultiply(event)

    {

        const multipl = event.detail;
this.countvalue *=multipl;

    }
    handelchange(event)
    {
this.startcounter = parseInt(event.target.value);

    }

    handelmixingvalue()

    {

        this.template.querySelector('c-child-call').maximimizecounter();
    }

}