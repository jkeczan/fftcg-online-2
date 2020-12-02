import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {APIService} from '../API.service';
import {ToastController} from '@ionic/angular';
import {CardCategoryService} from '../services/card-category.service';
import {CardJobService} from '../services/card-job.service';

@Component({
    selector: 'app-card-uploader',
    templateUrl: './card-uploader.page.html',
    styleUrls: ['./card-uploader.page.scss'],
})
export class CardUploaderPage implements OnInit {
    public cardForm: FormGroup;
    public cardCategoryForm: FormGroup;
    public jobForm: FormGroup;
    public cardTypes = [
        'Forward',
        'Backup',
        'Monster',
        'Summon'
    ];

    public rarities = [
        'Common',
        'Rare',
        'Hero',
        'Legend'
    ];

    public categories = [];

    public jobs = [];

    public imageSrc = '';

    constructor(private formBuilder: FormBuilder, private api: APIService,
                private toastController: ToastController, private cardCategoryService: CardCategoryService,
                private cardJobService: CardJobService) {
    }

    async ngOnInit() {
        this.cardForm = this.formBuilder.group({
            cost: [null, Validators.required],
            serialNumber: [null, Validators.required],
            elements: [null, Validators.required],
            cardType: [null, Validators.required],
            jobs: [null, Validators.required],
            categories: [null, Validators.required],
            powerLevel: [null, Validators.required],
            effectText: [null, Validators.required],
            effects: [null, Validators.required],
            isExBurst: [null, Validators.required],
            rarity: [null, Validators.required],
            isMultiPlay: [null, Validators.required],
            imageSrc: [null, Validators.required]
        });

        this.cardCategoryForm = this.formBuilder.group({
            name: [null, Validators.required]
        });

        this.jobForm = this.formBuilder.group({
            name: [null, Validators.required]
        });

        await this.getCategories();
        await this.getJobs();
        this.api.OnCreateCardCategoryListener.subscribe(this.onCategoryAdded.bind(this));
        this.api.OnCreateCardJobListener.subscribe(this.onJobAdded.bind(this));
    }

    onImageChange(event) {
        const reader = new FileReader();

        if (event.target.files && event.target.files.length) {
            const [file] = event.target.files;
            reader.readAsDataURL(file);

            reader.onload = () => {
                this.imageSrc = reader.result as string;
                this.cardForm.patchValue({
                    fileSource: reader.result
                });
            };
        }
    }

    onCategoryAdded(newCategory) {
        this.categories.push(newCategory.value.data.onCreateCardCategory);
    }

    onJobAdded(newJob) {
        this.jobs.push(newJob.value.data.onCreateCardJob);
    }

    async getCategories() {
        this.categories = await this.cardCategoryService.getAllCategories();
    }

    async getJobs() {
        this.jobs = await this.cardJobService.getAllJobs();
    }

    async addCard() {
        try {
            await this.api.CreateCard(this.cardForm.value);
            await (await this.toastController.create({message: 'Card Created Successfully'})).present();
        } catch (err) {
            console.log(err);
            await (await this.toastController.create({message: 'Card Created Failed'})).present();
        }
    }

    async addCategory() {
        try {
            await this.api.CreateCardCategory(this.cardCategoryForm.value);
            await (await this.toastController.create({message: 'Category Created Successfully'})).present();
        } catch (err) {
            console.log(err);
            await (await this.toastController.create({message: 'Category Created Failed'})).present();
        }
    }

    async addJob() {
        try {
            await this.api.CreateCardJob(this.jobForm.value);
            await (await this.toastController.create({message: 'Job Created Successfully'})).present();
        } catch (err) {
            console.log(err);
            await (await this.toastController.create({message: 'Job Created Failed Failed'})).present();
        }
    }
}
